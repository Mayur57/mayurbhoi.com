import {
  Box,
  Heading,
  LinkBox,
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
  <Box
    w="100%"
    py={5}
    px={4}
    transition="background-color 250ms ease-in-out"
    borderRadius="8px"
    role="group"
    _hover={{
      backgroundColor: useColorModeValue("#EEE", "#1A1A1A"),
    }}
  >
    <Link href={`/posts/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Text
          pos="absolute"
          opacity={0}
          letterSpacing="0.1em"
          fontWeight={400}
          lineHeight={1.5}
          textTransform="uppercase"
          fontSize={20}
          mt={3}
          transition="all 250ms linear"
          bottom={0}
          right={0}
          _groupHover={{ opacity: 1 }}
        >
          →
        </Text>
        <Text
          fontWeight={500}
          fontSize={22}
          lineHeight={1.4}
          letterSpacing="-0.03em"
        >
          {title}
        </Text>
        <Text fontSize="13" lineHeight={1.5} fontWeight={400} mt={2} mr={2}>
          {desc}
        </Text>
        <Heading
          letterSpacing="0.1em"
          fontWeight={400}
          lineHeight={1.5}
          textTransform="uppercase"
          fontSize={10}
          mt={3}
        >
          {tag} • {date} • {readingTime}
        </Heading>
      </LinkBox>
    </Link>
  </Box>
);
