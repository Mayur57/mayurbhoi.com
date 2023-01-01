import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { HueGlowAnimFrames } from "../../libs/functions";

const ResumeBox = () => (
  <Link href={process.env.NEXT_PUBLIC_RESUME}>
    <Box
      pos="relative"
      flex={1}
      overflow="hidden"
      borderWidth={1}
      height={{ base: "3.725em", sm: "4.1em" }}
      borderColor={useColorModeValue("#000", "#888")}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Box
        background="linear-gradient(-45deg, #007CF0, #00DFD8, #FF0080, #007CF0)"
        backgroundSize="400% 400%"
        filter="blur(40px) saturate(150%)"
        opacity="15%"
        h="100%"
        w="100%"
        animation={`${HueGlowAnimFrames} linear 12s infinite`}
        transition="all 1s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          opacity: "50%",
          animation: `${HueGlowAnimFrames} linear 6s infinite`,
        }}
      />
      <Box position="absolute" left="12px" top="12px">
        <Text
          letterSpacing="0.1em"
          fontSize={{ base: "0.6em", sm: "0.65em" }}
          textTransform="uppercase"
          fontWeight={400}
        >
          Resume
        </Text>
        <Text
          letterSpacing="-0.03em"
          fontSize={{ base: "0.8em", sm: "1em" }}
          fontWeight={500}
        >
          Mayur Bhoi
        </Text>
      </Box>
    </Box>
  </Link>
);

export default ResumeBox;
