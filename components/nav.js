/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuDivider,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiArrowUpRight } from "react-icons/fi";
import Logo from "./logo";
import ThemeButton from "./ThemeButton";
import { event } from "../libs/trackers";
import { Links } from "../data/links";

const LogResume = () => {
  event({
    action: "view_item",
    params: {
      message: "Viewed resume.",
    },
  });
};

function LinkItem({ href, path, label }) {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "#FEF6E5");
  const activeBackgroundColor = useColorModeValue(
    "rgba(121, 96, 206, 0.3)",
    "#FF7B8230"
  );
  return (
    <NextLink href={href} passHref>
      <Link
        py={2}
        px={4}
        bg={active ? activeBackgroundColor : undefined}
        color={inactiveColor}
        fontSize={14}
        borderRadius={6}
        _hover={{
          transform: "scale(1.1)",
          opacity: useColorModeValue(0.6, 1),
          color: useColorModeValue("purple", "#FE5B5E"),
        }}
      >
        {label}
      </Link>
    </NextLink>
  );
}

function ResumeLink({ link, path, isMenu }) {
  return (
    <Box onClick={LogResume}>
      {isMenu ? (
        <Center>
          Resume&nbsp;&nbsp;
          <FiArrowUpRight size={14} opacity={0.4} />
        </Center>
      ) : (
        <Link
          _target="_blank"
          href={link}
          path={path}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
          pl={2}
          fontSize={14}
          px={4}
          textUnderlineOffset={5}
          transition="250ms ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            opacity: useColorModeValue(0.6, 1),
            color: useColorModeValue("purple", "#FE5B5E"),
            transition: "250ms ease-in-out",
          }}
          color={useColorModeValue("gray200", "#FEF6E5")}
        >
          Resume
        </Link>
      )}
    </Box>
  );
}

function Navbar(props) {
  const { path } = props;
  const sourceLink = "https://github.com/Mayur57/portfolio-v2";
  const resumeLink = Links.resume;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      pl={4}
      bg={useColorModeValue("#ffffff40", "#20202020")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
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
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                transition="all 0.2s"
                _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem>Articles</MenuItem>
                </NextLink>
                <MenuDivider />
                <NextLink href={sourceLink} passHref>
                  <MenuItem>
                    Source&nbsp;&nbsp;
                    <FiArrowUpRight size={14} opacity={0.4} />
                  </MenuItem>
                </NextLink>
                <NextLink href={resumeLink} passHref>
                  <MenuItem>
                    <ResumeLink isMenu />
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
