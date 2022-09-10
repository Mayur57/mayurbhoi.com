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

export const FooterLink = ({ href, label, disabled }) => (
  <Link href={href} passHref>
    <Text
      color={useColorModeValue("#000000", "#F5F5F5")}
      mb={2}
      fontSize={14}
      opacity={disabled ? 0.3 : 0.7}
      transition="all 200ms ease-in"
      cursor={disabled ? "default" : "pointer"}
      pointerEvents={disabled ? "none" : "auto"}
      userSelect={disabled ? "none" : "auto"}
      _hover={{
        opacity: disabled ? 0.3 : 1,
        textUnderlineOffset: disabled ? 0 : 2,
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
    color={useColorModeValue("#303030", "#EEE")}
    letterSpacing={1.2}
    fontWeight={500}
    mb={1}
  >
    {label}
  </Text>
);
