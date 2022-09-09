import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Links } from "../../data/links";
import ResumeLink from "./ResumeLink";

const sourceLink = "https://github.com/Mayur57/portfolio-v2";
const resumeLink = Links.resume;

const NavbarMenu = () => (
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
      <MenuDivider />
      <Link href={sourceLink} passHref>
        <MenuItem>
          Source&nbsp;&nbsp;
          <FiArrowUpRight size={14} opacity={0.4} />
        </MenuItem>
      </Link>
      <Link href={resumeLink} passHref>
        <MenuItem>
          <ResumeLink isMenu />
        </MenuItem>
      </Link>
    </MenuList>
  </Menu>
);

export default NavbarMenu;
