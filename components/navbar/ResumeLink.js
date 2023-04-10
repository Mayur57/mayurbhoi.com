/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Link, useColorModeValue, Center } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import ResumeLinkTracker from "./ResumeLinkTracker";

const ResumeLink = ({ link, path, isMenu }) => (
  <Box onClick={ResumeLinkTracker}>
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
        display="inline"
        alignItems="center"
        fontSize={11}
        py={1}
        px={2}
        lineHeight={0}
        transition="250ms ease-in-out"
        _hover={{
          opacity: useColorModeValue(0.6, 1),
          color: useColorModeValue("purple", "#FE5B5E"),
          transition: "250ms ease-in-out",
        }}
        color={useColorModeValue("gray200", "#CCC")}
      >
        Resume
      </Link>
    )}
  </Box>
);

export default ResumeLink;
