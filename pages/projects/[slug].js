/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Container, Link, Text, Heading, Stack } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Layout from "../../components/layouts/article";
import { getCMSBaseUrl } from "../../libs/functions";
import {
  renderHeadingType6,
  renderHyperlinks,
  renderParagraph,
} from "../../components/ArticleCustomComponents";

const Work = ({ project }) => (
  <Layout title={project.title}>
    <Container maxW="container.lg" mt={4}>
      <Stack
        display="flex"
        direction={{ sm: "column", md: "row", base: "column" }}
      >
        <Box flex={2} mr={{ base: 0, sm: 0, md: 30, lg: 36 }}>
          <Heading
            variant="pronouns"
            fontWeight={500}
            fontSize={13}
            mt={4}
            opacity={0.6}
          >
            {project.slug}
          </Heading>
          <Text
            as="h1"
            fontWeight={800}
            letterSpacing={-2}
            fontSize={48}
            lineHeight={1.1}
            marginY={4}
          >
            {project.title}
          </Text>
          <Text style={{ fontSize: "0.9em", opacity: 0.7 }}>
            {project.description}
          </Text>
        </Box>
        <Box flex={3} pt={4}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h6: renderHeadingType6,
              p: renderParagraph,
              a: renderHyperlinks,
            }}
          >
            {project.body}
          </ReactMarkdown>
          <Text
            style={{
              fontWeight: 500,
              letterSpacing: "0.19em",
              lineHeight: "25px",
              fontSize: 12,
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            Links
          </Text>
          {project.links.length > 0 ? (
            <Text mt={1} mb={8} fontSize={14}>
              {project.links.map((link) => (
                <Link marginRight={4} href={Object.values(link)[0]}>
                  <a>{Object.keys(link)[0]}</a>
                </Link>
              ))}
            </Text>
          ) : (
            <></>
          )}
        </Box>
      </Stack>
      {/** TODO: Add images for all projects */}
      {/* <SectionTitle>Product Images</SectionTitle>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", base: "1fr" }}
        gap={8}
        mt={4}
      >
        {project.images.map(({ url }) => (
          <GridItem key={Math.random()}>
            <AspectRatio ratio={1.5} position="relative">
              <Image
                src={url}
                layout="fill"
                alt="Product image"
                className="pimage"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </AspectRatio>
          </GridItem>
        ))}
      </Grid> */}
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
    `${getCMSBaseUrl()}/projects?filters[slug]=${params.slug}`
  );
  const result = await res.json();
  return {
    props: {
      project: result.data[0].attributes,
    },
    revalidate: 7200,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${getCMSBaseUrl()}/projects`);
  const response = await res.json();
  const paths = response.data.map((project) => ({
    params: { slug: project.attributes.slug },
  }));

  return { paths, fallback: false };
};
