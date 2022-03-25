import React from "react";
import { Box, Center, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { Container, FooterLink, Heading } from "./footer-styles";
import Logo from "../logo";
import Social from "../social";

const Links = () => (
  <Container>
    <HStack align>
      <VStack width="33%" alignItems="flex-start">
        <Logo span={30} />
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
        <FooterLink href="resume.pdf" label="Resume" />
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
    <Box mt={10}>
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
        mb={4}
      >
        <Text fontSize="0.6rem">{"</>"} WITH 💖 IN 🇮🇳</Text>
        <Text fontSize="0.6rem" mt={0.8}>
          &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED
        </Text>
      </Box>
    </Box>
  );
}
export default Footer;
