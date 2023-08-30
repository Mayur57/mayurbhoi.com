import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const ContactBox = ({ field, value, last, top, link }) => (
  <Link href={link} passHref>
    <Box
      flex={1}
      borderWidth={1}
      borderTop={top ? "solid 1px" : "none"}
      borderRight={last ? "solid 1px" : "none"}
      py="12px"
      px="12px"
      transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
      borderColor={useColorModeValue("#000", "#888")}
      _hover={{
        backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
        cursor: "pointer",
      }}
    >
      <Text
        letterSpacing="0.1em"
        fontSize={{ base: "0.6em", sm: "0.65em" }}
        textTransform="uppercase"
        fontWeight={400}
      >
        {field}
      </Text>
      <Text
        letterSpacing="-0.03em"
        fontSize={{ base: "0.8em", sm: "1em" }}
        fontWeight={500}
      >
        {value}
      </Text>
    </Box>
  </Link>
);

export default ContactBox;
