/* eslint-disable no-unsafe-optional-chaining */
import { Box, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const ProjectsGridItem = ({ post }) => {
  const { slug, title, description, thumbnail } = post?.attributes;
  return (
    <Box
      role="group"
      flex={1}
      overflow="hidden"
      h="100%"
      transition="all 500ms ease"
    >
      <Link href={`/projects/${slug}`} legacyBehavior passHref>
        <LinkOverlay href={`/projects/${slug}`}>
          <Box
            display="flex"
            w="100%"
            alignItems="center"
            borderRadius="25px"
            p="8px"
            _groupHover={{
              backgroundColor: useColorModeValue("#0000000A", "#FFFFFF0A"),
            }}
          >
            <Box
              pos="relative"
              height="56px"
              width="56px"
              minWidth="56px"
              mr="1em"
              borderWidth="1px"
              borderRadius="16px"
              overflow="clip"
              ratio={1}
              ml={{ base: "3px", md: "0px" }}
            >
              <Image src={thumbnail} fill />
            </Box>
            <Box display="flex" flexDir="column" ml="1em">
              <Text
                fontWeight={500}
                fontSize={16}
                lineHeight={1.4}
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
              <Text
                fontSize={13}
                lineHeight={1.4}
                fontWeight={400}
                opacity={0.75}
                color={useColorModeValue("#858585", "#7e7e7e")}
                mt={1}
                mr={2}
              >
                {description.length > 70
                  ? `${description.substring(0, 70)}...`
                  : description}
              </Text>
            </Box>
          </Box>
        </LinkOverlay>
      </Link>
    </Box>
  );
};
