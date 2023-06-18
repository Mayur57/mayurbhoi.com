/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../libs/Shimmer";
import profile from "../public/images/me.webp";

export default function Headshot({ src = profile, ...props }) {
  return (
    <Box
      height={{ base: 150, sm: 195 }}
      width={{ base: 150, sm: 195 }}
      position="relative"
      borderRadius="100%"
      borderColor={useColorModeValue("purple.50", "#FEF6E5")}
      backgroundColor={useColorModeValue("purple.100", "red.200")}
      borderWidth={8}
      borderStyle="solid"
      boxShadow="lg"
      overflow="hidden"
      transition="all 250ms"
      _hover={{
        boxShadow: "lg",
        transition: "250ms",
        transform: null,
      }}
      {...props}
    >
      <Image
        priority
        layout="fill"
        display="inline-block"
        src={src}
        alt="Profile Picture"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </Box>
  );
}
