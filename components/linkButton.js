import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const LinkButton = ({ children, link }) => (
  <Box align="center" my={4} mt="30px">
    <NextLink href={link}>
      <Button
        variant="new-tab-action"
        rightIcon={<ChevronRightIcon />}
        _hover={{
          bgColor: useColorModeValue("rgba(121, 96, 206, 0.5)", "#FE5B5E80"),
          transform: "scale(1.05)",
          boxShadow: `lg`,
        }}
        bgColor={useColorModeValue("rgba(121, 96, 206, 0.3)", "#FE5B5E4D")}
        borderColor={useColorModeValue("rgba(121, 96, 206, 0.4)", "#FE5B5E66")}
      >
        {children}
      </Button>
    </NextLink>
  </Box>
);

export default LinkButton;
