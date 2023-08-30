/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeButton from "../ThemeButton";
import LinkItem from "./MenuLink";

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      h="max-content"
      justifyContent="center"
      align="center"
      zIndex={5}
      bottom={{ base: 6, sm: undefined }}
      top={{ base: undefined, sm: 2 }}
      {...props}
    >
      {path !== "/" && (
        <motion.div
          initial={{ opacity: 0, y: -2, scale: 1.025 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          width="100%"
        >
          <Box
            display="inline-flex"
            overflowX="scroll"
            alignItems="center"
            justifyContent="space-between"
            padding="4px 12px"
            borderRadius="0.75rem"
            width={{ base: "90%", sm: "auto" }}
            boxShadow="0 20px 25px -5px rgba(0,0,0,.05),0 8px 10px -6px rgba(0,0,0,.05)"
            background={useColorModeValue("#FFFFFF99", "#12121299")}
            border={`1px solid ${useColorModeValue("#00000020", "#FFFFFF20")}`}
            backdropFilter={path === "/" ? "" : "blur(16px) saturate(150%)"}
          >
            <Link href="/" passHref>
              <Box
                mt="2px"
                mx="0.5em"
                height="0.7em"
                width="0.7em"
                bgColor={useColorModeValue("#FF5C00", "#FFB346")}
                borderRadius="50%"
                cursor="pointer"
              />
            </Link>
            <LinkItem href="/about" path={path} label="About" />
            <LinkItem href="/projects" path={path} label="Projects" />
            <LinkItem href="/posts" path={path} label="Posts" />
            <LinkItem href="/resume.pdf" path={path} label="Resume" />
            <ThemeButton />
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Navbar;
