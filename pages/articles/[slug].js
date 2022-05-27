/* eslint-disable no-param-reassign */
import { Box, Container, Text, HStack } from "@chakra-ui/react";
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

// const SectionTitle = ({ children }) => (
//   <Heading variant="pronouns" fontWeight={500} fontSize={13} mt={4} mb={2}>
//     {children}
//   </Heading>
// );

const DeveloperWarning = () => (
  <Box
    backgroundColor="red.100"
    fontSize={12}
    color="red.500"
    borderRadius="lg"
    px={4}
    py={4}
  >
    <HStack>
      <RiErrorWarningLine size={14} />
      <Text fontSize={12} color="gray.600">
        Page content not final
      </Text>
    </HStack>
  </Box>
);

const Work = ({ post, content }) => {
  const TOC = [];
  const c = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => (tree) => {
      visit(tree, "element", (node) => {
        if (node.tagName === "h2") {
          const id = parameterize(node.children[0].value);
          node.properties.id = id;
          TOC.push({ id, title: node.children[0].value });
        }
      });
    })
    .use(rehypeStringify)
    .processSync(content)
    .toString();
  return (
    <Layout title={post.title}>
      <Container maxW="container.md" mt={4}>
        <DeveloperWarning />
        <Title style={{ marginTop: 70, marginBottom: 10 }}>{post.title}</Title>
        <ul>
          {TOC.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <Text my={4} opacity={0.7}>
          {post.description}
        </Text>
        <div dangerouslySetInnerHTML={{ __html: c }} />
      </Container>
    </Layout>
  );
};
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
    `https://mosaic-cms-backend.herokuapp.com/api/posts?filters[slug]=${params.slug}`
  );
  const result = await res.json();
  const htmlContent = await markdownToHtml(result.data[0].attributes.body);
  const content = htmlContent.replace(/\n/g, "<br />");
  return {
    props: {
      post: result.data[0].attributes,
      content,
    },
    revalidate: 15,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://mosaic-cms-backend.herokuapp.com/api/posts`);
  const response = await res.json();
  const paths = response.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: false };
};
