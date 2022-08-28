import { Box } from "@chakra-ui/react";

export const Tag = ({ children, color }) => (
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
    fontFamily="'Space Grotesk', sans-serif"
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
