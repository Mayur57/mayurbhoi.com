/* eslint-disable react/jsx-props-no-spreading */
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Links } from "../../data/links";
import ResumeLink from "./ResumeLink";

const { source, resume } = Links;

const NavbarMenu = () => (
  <Menu isLazy id="navbar-menu">
    <MenuButton
      as={IconButton}
      icon={<HamburgerIcon />}
      variant="outline"
      ml={2}
      display={{ base: "inline-flex", md: "none" }}
      backgroundColor={useColorModeValue("white", "#111")}
      border="none"
      aria-label="Options"
    />
    <MenuList>
      <Link href="/" passHref>
        <MenuItem>Home</MenuItem>
      </Link>
      <Link href="/about" passHref>
        <MenuItem>About</MenuItem>
      </Link>
      <Link href="/projects" passHref>
        <MenuItem>Projects</MenuItem>
      </Link>
      <Link href="/posts" passHref>
        <MenuItem>Posts</MenuItem>
      </Link>
      {/* <Link href="/snippets" passHref>
        <MenuItem>Snippets</MenuItem>
      </Link> */}
      <MenuDivider />
      <Link href="/meta" passHref>
        <MenuItem>About Website</MenuItem>
      </Link>
      <Link href="/privacy" passHref>
        <MenuItem>Privacy Policy</MenuItem>
      </Link>
      <MenuDivider />
      <Link href={source} passHref>
        <MenuItem>
          Source&nbsp;&nbsp;
          <FiArrowUpRight size={14} opacity={0.4} />
        </MenuItem>
      </Link>
      <Link href={resume} passHref>
        <MenuItem>
          <ResumeLink isMenu />
        </MenuItem>
      </Link>
      <MenuDivider />
      <Box display="flex" alignItems="start">
        <Text fontSize={10} ml={4} opacity={0.4}>rev {process.env.NEXT_PUBLIC_REVISION}</Text>
      </Box>
    </MenuList>
  </Menu>
);

export default NavbarMenu;
