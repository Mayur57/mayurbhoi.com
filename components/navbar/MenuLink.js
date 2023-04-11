import NextLink from "next/link";
import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";

const LinkItem = ({ href, path, label }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "#CCC");
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Box display="inline" flexDir='column' py={2} mb="1px">
        <Link
          px="6px"
          color={inactiveColor}
          fontSize={12}
          borderRadius={6}
          transition="all 250ms ease-in-out"
          lineHeight={0}
          _hover={{
            opacity: useColorModeValue(0.6, 1),
            color: useColorModeValue("purple", "#FE5B5E"),
          }}
        >
          {label}
        </Link>
        {active && <Text lineHeight={0} transform="translateY(0em)" opacity={0.5} pointerEvents='none' userSelect="none" fontWeight="bold">
          .
        </Text>}
      </Box>
    </NextLink>
  );
};

export default LinkItem;
