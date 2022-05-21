import Link from "next/link";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const Container = ({ children }) => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent="center"
    maxW="1000px"
    margin="0 auto"
  >
    {children}
  </Box>
);

export const FooterLink = ({ href, label }) => (
  <Link href={href} passHref>
    <Text
      color={useColorModeValue("#000000", "#FEF6E5")}
      mb={2}
      fontSize={14}
      opacity={0.7}
      transition="all 200ms ease-in"
      cursor="pointer"
      _hover={{
        opacity: 1,
        textDecoration: "underline",
        textUnderlineOffset: 2,
      }}
    >
      {label}
    </Text>
  </Link>
);

export const Heading = ({ label }) => (
  <Text
    fontSize={14}
    textTransform="uppercase"
    color={useColorModeValue("#303030", "#FEF6E5")}
    letterSpacing={1.2}
    fontWeight={500}
    mb={1}
  >
    {label}
  </Text>
);
