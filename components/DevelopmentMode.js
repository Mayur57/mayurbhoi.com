import { Box, Text } from "@chakra-ui/react";
import { IoIosHammer } from "react-icons/io";
import LinkButton from "./LinkButton";

export const DevelopmentMode = () => (
  <Box
    width="100vw"
    height="100vh"
    backgroundColor="#1D1D1F"
    color="#FEF6E5"
    align="center"
    pt="36vh"
    fontFamily='"SF Mono", "Space Grotesk", monospace'
  >
    <Box opacity="0.4" mb="16px">
      <IoIosHammer size="4em" />
    </Box>
    Under Development
    <Box maxW={{ base: "75%", md: "50%", lg: "30%" }} mt="4px">
      <Text fontSize="0.65em" opacity="0.8">
        New version is in development. Meanwhile, you can visit the old (but
        outdated) version of the website.
      </Text>
    </Box>
    <LinkButton
      label="Old Version"
      link="https://old.mayurbhoi.com"
      bg="#1D1D1F"
    />
    <Box
      pos="absolute"
      bottom="10px"
      fontSize="0.6em"
      opacity="0.5"
      left={0}
      right={0}
    >
      mayurbhoi.com
    </Box>
  </Box>
);
