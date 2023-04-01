import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

const LinkItem = ({ href, path, label }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "#CCC");
  const activeBackgroundColor = useColorModeValue(
    "rgba(121, 96, 206, 0.3)",
    "#FF7B8230"
  );
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link
        py={2}
        px={4}
        bg={active ? activeBackgroundColor : undefined}
        color={inactiveColor}
        fontSize={14}
        borderRadius={6}
        _hover={{
          transform: "scale(1.1)",
          opacity: useColorModeValue(0.6, 1),
          color: useColorModeValue("purple", "#FE5B5E"),
        }}
      >
        {label}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
