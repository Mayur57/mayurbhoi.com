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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";
import { RiErrorWarningLine } from "react-icons/ri";
import ErrorPage from "next/error";
import { Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Images from "../../data/images";
import projects from "../../data/projects";

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

const Work = () => {
  const router = useRouter();
  if (!router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }
  const { slug } = router.query;
  const filterResult = projects.filter((project) => project.slug === slug);
  const project = filterResult[0];
  return (
    <Layout title={project.title}>
      <Container maxW="container.lg" mt={4}>
        <DeveloperWarning />
        <Stack display="flex" direction={{ md: "row", base: "column" }}>
          <Box flex={2} mr={{ base: 40, sm: 0, md: 30, xl: 36 }}>
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
        <Image
          src={Images.covid}
          alt="Product image"
          className="pimage"
          placeholder="blur"
        />
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
