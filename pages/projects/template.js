import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";
import { Title, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import Images from "../../data/images";

const SectionTitle = ({ children }) => (
  <Heading variant="pronouns" fontWeight={500} fontSize={13} mt={4} mb={2}>
    {children}
  </Heading>
);

const DeveloperWarning = () => (
  <Box
    backgroundColor="red.100"
    borderWidth={1.5}
    fontSize={12}
    color="#121212"
    borderColor="red.200"
    borderRadius="lg"
    px={4}
    py={6}
  >
    Well, you&apos;re a sneaky person! You aren&apos;t supposed to see this
    template. Good job on finding it though. 👌
  </Box>
);

const Work = () => (
  <Layout title="Project Template">
    <Container mt={4}>
      <Title>Project Page Template</Title>
      <DeveloperWarning />
      {/** //! TODO: Do not use this in a real project doc */}
      <SectionTitle>About</SectionTitle>
      <P>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </P>
      <SectionTitle>Stack</SectionTitle>
      <P>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
      </P>
      <SectionTitle>Learnings</SectionTitle>
      <P>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available.
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
