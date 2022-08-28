/* eslint-disable react/jsx-props-no-spreading */
import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { Links } from "../../data/links";
import Logo from "../Logo";
import ThemeButton from "../ThemeButton";
import LinkItem from "./MenuLink";
import NavbarMenu from "./NavbarMenu";
import ResumeLink from "./ResumeLink";

const Navbar = (props) => {
  const { path } = props;
  const resumeLink = Links.resume;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      pl={4}
      pr={2}
      bg={useColorModeValue("#ffffff88", "#20202020")}
      css={{ backdropFilter: "blur(20px) saturate(150%)" }}
      zIndex={5}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("#00000000", "#ffffff20")}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Logo span={25} />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path} label="About" />
          <LinkItem href="/projects" path={path} label="Projects" />
          <LinkItem href="/posts" path={path} label="Posts" />
          <ResumeLink link={resumeLink} path={path} />
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box
            ml={2}
            zIndex={100}
            display={{ base: "inline-block", md: "none" }}
          >
            <NavbarMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
