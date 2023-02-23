import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export const PostsGridItem = ({
  desc,
  id,
  title,
  date,
  tag = "none",
  readingTime = "0 mins read",
}) => (
  <Box w="100%" py={4} h="100%" transition="250ms ease-in-out" role="group">
    <Link href={`/posts/${id}`} passHref>
      <LinkBox cursor="pointer">
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
        <Text fontSize="12" lineHeight={1.5} fontWeight={400} mt={2} mr={2}>
          {desc}
        </Text>
        <Heading
          letterSpacing="0.1em"
          fontWeight={400}
          lineHeight={1.5}
          textTransform="uppercase"
          fontSize={10}
          mt={3}
          mb={2}
        >
          {tag} • {date} • {readingTime}
        </Heading>
      </LinkBox>
    </Link>
  </Box>
);
