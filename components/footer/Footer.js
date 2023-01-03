import React from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Social from "../Social";
import Logo from "../Logo";

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
        <Box
          display="flex"
          flexDir="column"
          flex={2}
          justifyContent="center"
          align="center"
        >
          <Social size={20} mt="1.5px" />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          flex={1}
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
