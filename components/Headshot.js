import { Image, useColorModeValue } from "@chakra-ui/react";

export default function Headshot() {
  return (
    <Image
      w="auto"
      h="auto"
      borderColor={useColorModeValue("white", "#FEF6E5")}
      backgroundColor={useColorModeValue("purple.100", "red.200")}
      borderWidth={6}
      borderStyle="solid"
      maxWidth="180px"
      display="inline-block"
      borderRadius="100px"
      src="/images/me.webp"
      alt="Profile Picture"
      boxShadow="lg"
      transition="all 250ms"
      placeholder="blur"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        transition: "250ms",
        borderColor: useColorModeValue("purple.300", "red.400"),
      }}
    />
  );
}
