import {
  Box,
  Stack,
  VStack,
  Text,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "../libs/Shimmer";
import "@fontsource/epilogue";

export default function HighlightWidget({
  title,
  description,
  image = "/images/projects/covid.jpg",
  href = "/",
}) {
  return (
    <Link href={href}>
      <Stack
        role="group"
        spacing={{ base: "25px", sm: "25px", md: "100px" }}
        direction={{ base: "column", sm: "column", md: "row" }}
        alignItems={{ md: "center" }}
        paddingY={{ base: 8, md: 12 }}
        transition="all 200ms ease"
        cursor="pointer"
      >
        <AspectRatio width={{ sm: "100%", md: 400 }} ratio={1.5}>
          <Box
            position="relative"
            transition="all 200ms ease"
            boxShadow="0 19px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%)"
            _groupHover={{
              transform: "translateY(-2px)",
              boxShadow:
                "0 19px 60px -10px rgb(0 0 0 / 40%), 0 18px 36px -18px rgb(0 0 0 / 43%)",
            }}
          >
            <Image
              src={image}
              layout="fill"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              alt={`Hero image for ${title}`}
            />
          </Box>
        </AspectRatio>
        <VStack
          alignItems="flex-start"
          transition="all 200ms ease"
          _groupHover={{ color: useColorModeValue("purple", "red.300") }}
        >
          <Text
            fontSize="1.65em"
            fontWeight="900"
            fontFamily="Epilogue, sans-serif"
          >
            {title}
          </Text>
          <Text opacity={0.7} maxW={400}>
            {description}
          </Text>
        </VStack>
      </Stack>
    </Link>
  );
}
