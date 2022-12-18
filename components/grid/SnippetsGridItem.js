import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";

export const SnippetsGridItem = ({ children, href, title }) => (
  <Box
    role="group"
    w="100%"
    px={6}
    py={2}
    borderRadius="8px"
    transition="all 250ms ease-in-out"
    _hover={{
      boxShadow: "xl",
      transform: "scale(1.005)",
    }}
  >
    <Link href={href ?? "#"} passHref>
      <LinkBox cursor="pointer">
        <LinkOverlay href={href ?? "#"}>
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
