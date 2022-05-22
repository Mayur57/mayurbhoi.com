import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Text,
  Heading,
  Stack,
  HStack,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { toBase64, shimmer } from "../../libs/Shimmer";
import projects from "../../data/projects";

export const getStaticProps = async ({ params }) => {
  const projectsList = projects.filter(
    (project) => project.slug.toString() === params.slug
  );
  return {
    props: {
      project: projectsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug.toString() },
  }));

  return { paths, fallback: false };
};

const SectionTitle = ({ children }) => (
  <Heading variant="pronouns" fontWeight={500} fontSize={13} mt={4} mb={2}>
    {children}
  </Heading>
);

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

const Work = ({ project }) => {
  const photos = project.images;
  return (
    <Layout title={project.title}>
      <Container maxW="container.lg" mt={4}>
        <DeveloperWarning />
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
              Project
            </Heading>
            <Text fontWeight={800} letterSpacing={-2} fontSize={48}>
              {project.title}
            </Text>
            <Heading variant="pronouns" fontWeight={500} fontSize={13} mt={12}>
              Description
            </Heading>
            <P>{project.description}</P>
            <Heading variant="pronouns" fontWeight={500} fontSize={13} mt={12}>
              Description
            </Heading>
            <P>{project.description}</P>
          </Box>
          <Box flex={3}>
            <SectionTitle>About</SectionTitle>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </P>
            <SectionTitle>Stack</SectionTitle>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </P>
            <SectionTitle>Learnings</SectionTitle>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </P>
            <SectionTitle>Links</SectionTitle>
            <List ml={4} my={4}>
              <ListItem>
                <Meta>Website</Meta>
                <Link href="/">
                  https://dummy.website.com
                  <ExternalLinkIcon ml="8px" mb="2px" fontSize={12} />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
        <SectionTitle>Product Images</SectionTitle>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", base: "1fr" }}
          gap={8}
          mt={4}
        >
          {photos.map((photo) => (
            <GridItem key={Math.random()}>
              <AspectRatio ratio={1.5} position="relative">
                <Image
                  src={photo}
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
        </Grid>
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
