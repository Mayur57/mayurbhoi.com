/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/rules-of-hooks */
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  Link,
  LinkOverlay,
  Grid,
  GridItem,
  useColorModeValue,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { shimmer, toBase64 } from "../libs/Shimmer";

const Tag = ({ children, color }) => (
  <Box
    position="absolute"
    top="10px"
    left="10px"
    bgColor={color}
    borderRadius={4}
    backdropFilter="blur(15px)"
    color="white"
    paddingX={2}
    paddingY={0.5}
    fontSize={11}
    opacity={1}
    letterSpacing={0.7}
    textTransform="uppercase"
    fontFamily="Space Grotesk"
    transition="all 200ms ease-in-out"
    _groupHover={{
      opacity: 0,
      transition: "all 200ms ease-in-out",
      transform: "translate(0px, -5px)",
    }}
  >
    {children}
  </Box>
);

const tagColors = (tag) => {
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
}) => (
  <Box w="100%" px={4} pb={2} transition="250ms ease-in-out" role="group">
    <NextLink href={`/posts/${id}`} passHref>
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
          <Tag color={tagColors(tag)}>{tag}</Tag>
          <LinkOverlay href={`/projects/${id}`}>
            <Text fontWeight="600" fontSize="20" mt={1.5} lineHeight={1.2}>
              {title}
            </Text>
          </LinkOverlay>
          <Heading
            variant="pronouns"
            opacity={0.5}
            letterSpacing="0.6px"
            fontSize={11}
          >
            {date}
          </Heading>
          <Text fontSize="12" opacity={0.7} mt={0} mr={2}>
            {desc}
          </Text>
        </Box>
      </LinkBox>
    </NextLink>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box role="group" w="100%">
    <NextLink href={`/projects/${id}`} passHref>
      <LinkBox cursor="pointer">
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
        <LinkOverlay href={`/projects/${id}`}>
          <Text fontWeight="600" fontSize="20" mt={1.5} lineHeight={1.2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize="12" opacity={0.7} mt={1.5} mr={2} pb={4}>
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const ProjectsGridItemIndex = ({
  id,
  title,
  desc,
  thumbnail,
  sourcelink,
  bloglink,
}) => (
  <Box
    w="100%"
    borderRadius="xl"
    p={4}
    transition="250ms ease-in-out"
    _hover={{
      transform: "scale(1.025)",
      transition: "250ms ease-in-out",
      boxShadow: "lg",
    }}
  >
    <NextLink href={`/projects/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="project-item-thumbnail"
          placeholder="blur"
        />
        <Text fontWeight="600" fontSize="20" mt={1}>
          {title}
        </Text>
        <Text fontSize="14" opacity={0.7}>
          {desc}
        </Text>
      </LinkBox>
    </NextLink>
    <Grid templateColumns="repeat(2, 80px)" gap={4} mt={2}>
      <GridItem fontSize={12} letterSpacing="1.2px">
        {sourcelink == null ? (
          <></>
        ) : (
          <NextLink href={sourcelink} passHref>
            <Link
              color={useColorModeValue("purple.500", "red.300")}
              transitionDuration="500ms"
              textDecoration="none"
              _hover={{
                color: useColorModeValue("purple.100", "red.200"),
                transitionDuration: "500ms",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              <ChevronRightIcon mr={1} mb={0.5} />
              SOURCE
            </Link>
          </NextLink>
        )}
      </GridItem>
      <GridItem fontSize={12} letterSpacing="1.2px">
        {bloglink == null ? (
          <></>
        ) : (
          <NextLink href={bloglink} passHref>
            <Link
              color={useColorModeValue("purple.500", "red.300")}
              textDecoration="none"
              _hover={{
                color: useColorModeValue("purple.100", "red.200"),
                transitionDuration: "500ms",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              <ChevronRightIcon mr={1} mb={0.5} />
              BLOG
            </Link>
          </NextLink>
        )}
      </GridItem>
    </Grid>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      
      .project-item-thumbnail {
        border-radius: 8px;
      }
    `}
  />
);
