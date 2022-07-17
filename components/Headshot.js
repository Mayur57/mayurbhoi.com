import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../libs/Shimmer";

export default function Headshot({ src = "/images/me.webp" }) {
  return (
    <Box
      height={195}
      width={195}
      position="relative"
      borderRadius="100%"
      borderColor={useColorModeValue("white", "#FEF6E5")}
      backgroundColor={useColorModeValue("purple.100", "red.200")}
      borderWidth={8}
      borderStyle="solid"
      boxShadow="lg"
      transition="all 250ms"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
        transition: "250ms",
        borderColor: useColorModeValue("purple.300", "red.400"),
      }}
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
