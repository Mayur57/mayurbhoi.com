import React from "react";
import { Box, Center, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { Container, FooterLink, Heading } from "./footer-styles";
import Logo from "../logo";
import Social from "../social";
import { Links as HyperLinks } from "../../data/links";

const Links = () => (
  <Container>
    <HStack align>
      <VStack width="33%" alignItems="flex-start">
        <Box ml={30}>
          <Logo span={30} />
        </Box>
      </VStack>
      <VStack width="33%" alignItems="flex-start">
        <Heading label="General" />
        <FooterLink href="/about" label="About" />
        <FooterLink href="/projects" label="Projects" />
        <FooterLink href="/posts" label="Blog" />
        <FooterLink href="mailto:mayur072000@gmail.com" label="Mail" />
      </VStack>
      <VStack width="33%" alignItems="flex-start">
        <Heading label="Specifics" />
        <FooterLink href={HyperLinks.resume} label="Resume" />
        <FooterLink
          href="https://github.com/Mayur57/portfolio-v2"
          label="Source"
        />
        <FooterLink href="/meta" label="About Website" />
      </VStack>
    </HStack>
  </Container>
);

function Footer() {
  return (
    <Box as="footer" mt={10} maxW="container.md" marginX="auto">
      <Divider mb={10} />
      <Links />
      <Center mt={10}>
        <Social size={22} spacing="30px" />
      </Center>
      <Box
        align="center"
        justifyContent="center"
        fontSize="0.55rem"
        fontWeight={600}
        paddingTop="30px"
        letterSpacing={1.2}
        color="#808080"
        mt={2}
        mb={12}
      >
        <Text fontSize="0.6rem">{"</>"} WITH 💖 IN 🇮🇳</Text>
        <Text fontSize="0.6rem" mt={0.8}>
          &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED.
        </Text>
      </Box>
    </Box>
  );
}
export default Footer;
