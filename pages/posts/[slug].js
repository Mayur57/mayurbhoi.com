/* eslint-disable no-param-reassign */
import {
  Box,
  Container,
  Text,
  VStack,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import parameterize from "parameterize";
import moment from "moment";
import Image from "next/image";

import Layout from "../../components/layouts/article";
import markdownToHtml from "../../libs/MDParser";
import Title from "../../components/title";
import { getCMSBaseUrl } from "../../libs/functions";
import { shimmer, toBase64 } from "../../libs/Shimmer";

const TableOfContents = ({ TOC }) => (
  <Box
    borderRadius="lg"
    borderWidth={1}
    height="fit-content"
    width="100%"
    p={5}
    flex={1}
    position={{ base: "relative", md: "sticky" }}
    top={{ base: 0, md: 16 }}
    my={{ base: 8, md: 0 }}
  >
    <h3 style={{ marginBottom: 6 }}>Contents</h3>
    <ul>
      {TOC.map(({ id, title }) => (
        <li key={id}>
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
    </ul>
  </Box>
);

const Work = ({ post, content, TOC }) => (
  <Layout title={post.title}>
    <Container maxW="container.lg" mt={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        flexDir="row"
        spacing={10}
      >
        {/** TODO: I am sure there is a better way to do this */}
        <Box
          width="25vw"
          height={0}
          flex={{ base: 0, md: 1 }}
          p={{ base: 0, md: 6 }}
        />
        <Box flex={3}>
          <AspectRatio
            ratio={2}
            width="100%"
            position="relative"
            borderRadius={8}
            mb={8}
            overflow="hidden"
          >
            <Image
              src={post.banner ?? "https://via.placeholder.com/300x100"}
              priority
              layout="fill"
              display="inline-block"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </AspectRatio>
          <Title
            style={{ marginBottom: 10, flex: 3, justifyItems: "baseline" }}
          >
            {post.title}
          </Title>
          <Text my={4} opacity={0.6} fontWeight={500} fontSize={13}>
            Published: {post.uploaded === null ? "UPLOAD_DATE" : post.uploaded}
          </Text>
          <Text my={2} opacity={0.7} fontStyle="italic">
            {post.description}
          </Text>
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 10 }}
      >
        <TableOfContents TOC={TOC} />
        <VStack align="baseline" flex={3} mt={12}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </VStack>
      </Stack>
      {/** <------ Extract to ShareButton Component ------> */}
      {/* <Tooltip hasArrow label="Copy post link to clipboard">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(location.href);
              setCopied(true);
            }}
          >
            {copied ? "Link Copied" : "Share"}
          </Button>
        </Tooltip> */}
    </Container>
  </Layout>
);
export default Work;

export const ProductImageStyle = () => (
  <Global
    styles={`
      .pimage {
        border-radius: 8px;
      }
    `}
  />
);

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${getCMSBaseUrl()}/posts?filters[slug]=${params.slug}`
  );
  const TOC = [];
  const result = await res.json();
  const htmlContent = await markdownToHtml(result.data[0].attributes.body);
  const content = htmlContent.replace(/\n/g, "<br />");
  const c = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => (tree) => {
      visit(tree, "element", (node) => {
        if (node.tagName === "h2") {
          const id =
            parameterize(node.children[0].value) +
            Math.floor(Math.random() * 1000);
          node.properties.id = id;
          TOC.push({ id, title: node.children[0].value });
        }
      });
    })
    .use(rehypeStringify)
    .processSync(content)
    .toString();
  result.data[0].attributes.uploaded = moment(
    result.data[0].attributes.uploaded
  ).format("DD MMMM YYYY");
  return {
    props: {
      post: result.data[0].attributes,
      content: c,
      TOC,
    },
    revalidate: 7200,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${getCMSBaseUrl()}/posts`);
  const response = await res.json();
  const paths = response.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: false };
};
