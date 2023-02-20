import {
  AspectRatio,
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "../../libs/Shimmer";

export const ProjectsGridItem = ({ children, id, title, thumbnail }) => (
  <Box role="group" w="100%">
    <Link href={`/projects/${id}`} passHref>
      <LinkBox cursor="pointer">
        <AspectRatio
          position="relative"
          ratio={5 / 3}
          borderRadius="16px"
          transition="all 250ms ease"
          mb={4}
          _groupHover={{
            transition: "all 250ms ease",
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            className="item-thumbnail"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </AspectRatio>
        <LinkOverlay href={`/projects/${id}`}>
          <Text
            fontWeight={500}
            fontSize={20}
            lineHeight={1.4}
            transition="all 250ms ease"
            letterSpacing="-0.03em"
            _groupHover={{
              color: useColorModeValue("purple.500", "red.400"),
            }}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text
          fontSize="12"
          lineHeight={1.5}
          fontWeight={400}
          mt={1.5}
          mr={2}
          pb={4}
        >
          {children}
        </Text>
      </LinkBox>
    </Link>
  </Box>
);
