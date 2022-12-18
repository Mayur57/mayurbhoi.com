import { Box } from "@chakra-ui/react";

export const Tag = ({ children, color }) => (
  <Box
    position="absolute"
    top="0px"
    right="0px"
    bgColor={color}
    borderBottomLeftRadius="8px"
    borderTopRightRadius="8px"
    backdropFilter="blur(15px)"
    color="white"
    paddingX="1.2em"
    paddingY="0.55em"
    fontSize="0.6em"
    opacity={1}
    filter="saturate(1)"
    letterSpacing={0.7}
    textTransform="uppercase"
    fontFamily="'Space Grotesk', sans-serif"
    transition="all 200ms ease-in-out"
  >
    {children}
  </Box>
);
