import React from "react";
import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import Social from "../Social";
import Logo from "../Logo";

const BuiltWidget = () => (
  <Box mt={1}>
    <Text display="inline-block" verticalAlign="middle" fontSize="10px">
      Built with
    </Text>
    <Box display="inline-block" verticalAlign="middle" px={1.5}>
      <svg
        stroke="currentColor"
        fill="#D53F8C"
        strokeWidth="0"
        viewBox="0 0 512 512"
        display="inline block"
        height="0.55em"
        width="0.55em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
      </svg>
    </Box>
    <Text display="inline-block" verticalAlign="middle" fontSize="10px">
      in India
    </Text>
  </Box>
);

function Footer() {
  return (
    <Box as="footer" py={4} maxW="container.lg" marginX="auto">
      <Divider mb={4} borderColor="#ababab" />
      <Flex dir="row">
        <Box
          fontSize="0.7rem"
          letterSpacing={0.1}
          px={{ base: 4, md: 8 }}
          userSelect="none"
          pointerEvents="none"
          display="flex"
          flexDir="column"
          flex={1}
        >
          <Text fontSize="14px" fontWeight={500}>
            Mayur Bhoi
          </Text>
          <Text fontSize="12px">rev {process.env.NEXT_PUBLIC_REVISION}</Text>
        </Box>
        <Box display="flex" flexDir="column" flex={2} justifyContent="center" align='center'>
          <Social size={20} mt='1.5px' />
          {/* <BuiltWidget /> */}
        </Box>
        <Box
          display="flex"
          flexDir="column"
          flex={1}
          // px={{ base: 4, md: 8 }}
          userSelect="none"
          pointerEvents="none"
          alignItems="flex-end"
          justifyContent="center"
          textAlign="right"
          marginTop={-2}
        >
          <Logo span="32px" />
        </Box>
      </Flex>
    </Box>
  );
}
export default Footer;
