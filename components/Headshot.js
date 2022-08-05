/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../libs/Shimmer";

export default function Headshot({
  src = "/images/me.webp",
  animate = false,
  ...props
}) {
  return (
    <Box
      height={195}
      width={195}
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
        boxShadow: animate ? "xl" : "lg",
        transition: "250ms",
        transform: animate ? "scale(1.1)" : null,
        borderWidth: animate ? 4 : null,
        borderColor: animate
          ? useColorModeValue("purple.300", "red.400")
          : null,
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
