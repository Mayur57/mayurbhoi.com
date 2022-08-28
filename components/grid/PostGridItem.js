import {
  AspectRatio,
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "../../libs/Shimmer";
import { Tag } from "./Tag";

const getTagColor = (tag) => {
  switch (tag.toUpperCase()) {
    case "TECH":
      return "#FF000033";
    case "ABSTRACT":
      return "#55FF5555";
    case "MISC":
      return "#0000FF33";
    default:
      return "#FFFFFF33";
  }
};

export const PostsGridItem = ({
  desc,
  id,
  title,
  thumbnail,
  date,
  tag = "none",
  readingTime = "0 mins read",
}) => (
  <Box w="100%" px={4} pb={2} transition="250ms ease-in-out" role="group">
    <Link href={`/posts/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Box>
          <AspectRatio
            position="relative"
            ratio={1.67}
            transition="all 250ms ease"
            borderRadius={40}
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
              className="project-item-thumbnail"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </AspectRatio>
          <Tag color={getTagColor(tag)}>{tag}</Tag>
          <LinkOverlay href={`/projects/${id}`}>
            <Text
              fontWeight="700"
              fontSize={24}
              mt={1.5}
              lineHeight={1.2}
              letterSpacing={-1}
            >
              {title}
            </Text>
          </LinkOverlay>
          <Heading
            variant="pronouns"
            opacity={0.5}
            letterSpacing="0.6px"
            fontSize={11}
            my={1}
          >
            {date} • {readingTime}
          </Heading>
          <Text fontSize="12" opacity={0.7} mt={0} mr={2}>
            {desc}
          </Text>
        </Box>
      </LinkBox>
    </Link>
  </Box>
);
