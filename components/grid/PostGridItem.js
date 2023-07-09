import { Box, Heading, LinkBox, Text } from "@chakra-ui/react";
import Link from "next/link";

export const PostsGridItem = ({
  desc,
  id,
  title,
  date,
  tag = "none",
  readingTime = "0 mins read",
}) => (
  <Box
    w="100%"
    my={5}
    transition="background-color 250ms ease-in-out"
    borderRadius="8px"
    role="group"
  >
    <Link href={`/posts/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Text
          fontWeight={500}
          fontSize={["1em", "1.2em"]}
          lineHeight={1.4}
          letterSpacing="-0.03em"
        >
          {title}
          <Text
            fontWeight={500}
            fontSize={18}
            lineHeight={1.4}
            opacity={0}
            ml={2}
            display="inline-flex"
            transition="all 250ms ease-in-out"
            _groupHover={{
              opacity: 1,
            }}
          >
            →
          </Text>
        </Text>
        <Text
          fontSize="0.75em"
          opacity={0.6}
          lineHeight={1.5}
          fontWeight={400}
          mt="0.4rem"
          mr={2}
        >
          {desc}
        </Text>
        <Heading
          letterSpacing="0.02em"
          fontWeight={400}
          lineHeight={1.5}
          fontSize="0.65em"
          opacity={0.4}
          mt="0.4rem"
        >
          {tag.charAt(0).toUpperCase() + tag.substring(1)} • {date} •{" "}
          {readingTime}
        </Heading>
      </LinkBox>
    </Link>
  </Box>
);
