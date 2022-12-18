import { AspectRatio, Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
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
          <Text as="h4" fontWeight="700" fontSize="1.5em" mt={1.5}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize="12" opacity={0.7} mt={1.5} mr={2} pb={4}>
          {children}
        </Text>
      </LinkBox>
    </Link>
  </Box>
);
