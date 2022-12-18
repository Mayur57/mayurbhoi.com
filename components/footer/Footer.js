import React from "react";
import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" py={6} maxW="container.lg" marginX="auto">
      <Divider mb={6} borderColor="#ababab" />
      <Flex dir="row">
        <Box
          fontSize="0.7rem"
          letterSpacing={0.1}
          px={{ base: 4, md: 8 }}
          userSelect="none"
          pointerEvents="none"
        >
          <Text fontSize="14px" fontWeight={500}>
            Mayur Bhoi
          </Text>
          <Text fontSize="12px">rev {process.env.NEXT_PUBLIC_REVISION}</Text>
        </Box>
        <Spacer />
        <Box
          display="flex"
          flexDir="column"
          px={{ base: 4, md: 8 }}
          userSelect="none"
          pointerEvents="none"
          alignItems="flex-end"
          justifyContent="center"
          textAlign="right"
        >
          <Box mt={-2}>
            <Text display="inline-block" verticalAlign="middle" fontSize="11px">
              Built with
            </Text>
            <Box display="inline-block" verticalAlign="middle" px={1.5}>
              <svg
                stroke="currentColor"
                fill="#D53F8C"
                strokeWidth="0"
                viewBox="0 0 512 512"
                display="inline block"
                height="0.7em"
                width="0.7em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            </Box>
            <Text display="inline-block" verticalAlign="middle" fontSize="11px">
              in India
            </Text>
          </Box>
          <Text fontSize="9px">Uses Next.js + ChakraUI</Text>
        </Box>
      </Flex>
    </Box>
  );
}
export default Footer;
