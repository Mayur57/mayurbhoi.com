/* eslint-disable no-param-reassign */
import { Box, Container, Text, HStack, VStack, Stack } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import parameterize from "parameterize";
import Layout from "../../components/layouts/article";
import markdownToHtml from "../../libs/MDParser";
import Title from "../../components/title";
import { getCMSBaseUrl } from "../../libs/functions";

const DeveloperWarning = () => (
  <Box
    backgroundColor="red.100"
    fontSize={12}
    color="red.500"
    borderRadius="lg"
    px={4}
    py={4}
    mb={8}
  >
    <HStack>
      <RiErrorWarningLine size={14} />
      <Text fontSize={12} color="gray.600">
        Page content not final
      </Text>
    </HStack>
  </Box>
);

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
      <DeveloperWarning />
      <Stack
        direction={{ base: "column", md: "row" }}
        flexDir="row"
        spacing={10}
      >
        {/** TODO: I am sure there is a better way to do this */}
        <Box
          width="20vw"
          height={0}
          flex={{ base: 0, md: 1 }}
          p={{ base: 0, md: 6 }}
        />
        <Title style={{ marginBottom: 10, flex: 3, justifyItems: "baseline" }}>
          {post.title}
        </Title>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 10 }}
      >
        <TableOfContents TOC={TOC} />
        <VStack align="baseline" flex={3}>
          <Text my={4} opacity={0.7}>
            {post.description}
          </Text>
          <Text my={4} opacity={0.7}>
            {post.uploaded === null ? "UPLOAD_DATE" : post.uploaded}
          </Text>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </VStack>
      </Stack>
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
