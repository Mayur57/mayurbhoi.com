import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
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
    </MenuList>
  </Menu>
);

export default NavbarMenu;
