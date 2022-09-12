import React from "react";
import {
  Box,
  Center,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Social from "../Social";
import Links from "./Links";

function Footer() {
  return (
    <Box as="footer" mt={10} maxW="container.lg" marginX="auto">
      <Divider mb={10} />
      <Links />
      <Center mt={10}>
        <Social size={22} spacing="30px" />
      </Center>
      <Box
        align="center"
        justifyContent="center"
        fontSize="0.7rem"
        letterSpacing={0.1}
        paddingTop="30px"
        mt={2}
        pb={12}
        userSelect="none"
        pointerEvents="none"
      >
        <Text mt={0.8} opacity={useColorModeValue(0.8, 0.6)}>
          &copy; {new Date().getFullYear()} Mayur Bhoi
        </Text>
        <Box>
          <Text
            display="inline-block"
            verticalAlign="middle"
            opacity={useColorModeValue(0.8, 0.6)}
          >
            Designed & Built with
          </Text>
          <Box display="inline-block" verticalAlign="middle" px={1.5}>
            <svg
              stroke="currentColor"
              fill="#D53F8C"
              strokeWidth="0"
              viewBox="0 0 512 512"
              display="inline block"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </Box>
          <Text
            display="inline-block"
            verticalAlign="middle"
            opacity={useColorModeValue(0.8, 0.6)}
          >
            in India
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;