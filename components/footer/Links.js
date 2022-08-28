import { Box, HStack, VStack } from "@chakra-ui/react";
import Logo from "../Logo";
import { Container, FooterLink, Heading } from "./FooterStyles";
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
        <FooterLink
          href="mailto:mayur072000+portfolio@gmail.com"
          label="Mail"
        />
      </VStack>
      <VStack width="33%" alignItems="flex-start">
        <Heading label="Specifics" />
        <FooterLink href={HyperLinks.resume} label="Resume" />
        <FooterLink href={HyperLinks.source} label="Source" />
        <FooterLink href="/meta" label="About Website" />
      </VStack>
    </HStack>
  </Container>
);

export default Links;
