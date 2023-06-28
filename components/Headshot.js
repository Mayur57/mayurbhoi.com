/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../libs/Shimmer";
import profile from "../public/images/me.webp";
import noise from "../public/images/noise.svg";

export default function Headshot({ src = profile, ...props }) {
  return (
    <Box
      role="group"
      pos="relative"
      height={{ base: 150, sm: 205 }}
      width={{ base: 150, sm: 205 }}
      borderRadius="10px"
      boxShadow="xl"
      transition="all 0.5s ease-out"
      zIndex={2}
      {...props}
    >
      <Box
        position="relative"
        h="100%"
        w="100%"
        borderRadius="10px"
        borderStyle="solid"
        overflow="hidden"
        userSelect="none"
        pointerEvents="none"
        transition="all 0.5s ease-out"
        filter="saturate(0) brightness(0.95) contrast(1.05)"
        _groupHover={{
          transition: "all 0.5s ease-out",
          filter: "saturate(1) brightness(1) contrast(1)",
        }}
        {...props}
      >
        <Image
          priority
          className="noise"
          display="inline-block"
          quality={100}
          src={src}
          alt="Profile Picture"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </Box>
      <Box
        className="overlay"
        pos="absolute"
        height={{ base: 150, sm: 205 }}
        width={{ base: 150, sm: 205 }}
        top={0}
        left={0}
        borderRadius="10px"
        bgColor="#00000099"
        bgImage={`url(${noise.src})`}
        opacity={0.9}
        mixBlendMode="overlay"
        filter="contrast(1)"
        zIndex={10}
        willChange="opacity"
        transition="all 0.5s ease-out"
        _groupHover={{
          opacity: 0,
        }}
      />
    </Box>
  );
}
