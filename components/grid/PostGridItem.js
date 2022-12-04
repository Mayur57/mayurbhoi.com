import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const getTagColor = (tag) => {
  switch (tag.toUpperCase()) {
    case "TECH":
      return "#0ead00";
    case "ABSTRACT":
      return "#b82525";
    case "MISC":
      return "#2564b8";
    default:
      return "#FFFFFF33";
  }
};

export const PostsGridItem = ({
  desc,
  id,
  title,
  date,
  tag = "none",
  readingTime = "0 mins read",
}) => (
  <Box w="100%" px={4} pb={2} transition="250ms ease-in-out" role="group">
    <Link href={`/posts/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Box transform="translate(-16px)">
          <LinkOverlay href={`/projects/${id}`}>
            <Text
              fontWeight="700"
              fontSize={24}
              mt={1.5}
              lineHeight={1.2}
              letterSpacing={-1}
              transition="all 250ms ease"
              _groupHover={{
                color: useColorModeValue("purple.500", "red.400"),
              }}
            >
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize="12" opacity={0.7} mt={2} mr={2}>
            {desc}
          </Text>
          <Heading
            variant="pronouns"
            opacity={0.5}
            letterSpacing="0.6px"
            fontSize={11}
            my={1}
          >
            <span style={{ color: getTagColor(tag), fontWeight: "bold" }}>
              {tag}
            </span>{" "}
            • {date} • {readingTime}
          </Heading>
        </Box>
      </LinkBox>
    </Link>
  </Box>
);
