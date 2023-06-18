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
  <Box
    role="group"
    pos="relative"
    overflow="hidden"
    w="100%"
    h="100%"
    bg={useColorModeValue("#fefefe", "#1a1a1a")}
    borderRadius="16px"
    transition="all 500ms ease"
    _hover={{ backgroundColor: useColorModeValue("#f5f5f5", "#2a2a2a") }}
    border={`1px solid ${useColorModeValue("#eaeaea", "#2a2a2a")}`}
  >
    <Link href={`/projects/${id}`} legacyBehavior passHref>
      <LinkBox cursor="pointer">
        <AspectRatio
          position="relative"
          ratio={5 / 3}
          borderRadius="16px"
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          transition="all 100ms linear"
          mb={4}
          _groupHover={{ filter: "blur(2px)" }}
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
            fontSize={16}
            lineHeight={1.4}
            pl={4}
            letterSpacing="-0.03em"
          >
            {title}{" "}
            <Text
              as="span"
              color="gray.500"
              fontSize={14}
              opacity={0}
              transition="all 250ms linear"
              _groupHover={{ opacity: 1 }}
            >
              →
            </Text>
          </Text>
        </LinkOverlay>
        <Text
          fontSize={12}
          lineHeight={1.4}
          fontWeight={400}
          color={useColorModeValue("#858585", "#7e7e7e")}
          mt={1}
          mr={2}
          px={4}
          pb={4}
        >
          {children}
        </Text>
      </LinkBox>
    </Link>
    <Box
      as="div"
      pos="absolute"
      backdropFilter="blur(40px)"
      transition="all 250ms linear"
      bgColor={useColorModeValue("#ffffff", "#1a1a1a")}
      top={0}
      right={0}
      zIndex={2}
      opacity={0}
      _groupHover={{ opacity: 1 }}
      mx={2}
      my={2}
      py={2}
      px={4}
      borderRadius="10px"
    >
      <Text
        letterSpacing="0.1em"
        fontWeight={400}
        lineHeight={1.5}
        fontSize={14}
        textTransform="uppercase"
      >
        →
      </Text>
    </Box>
  </Box>
);
