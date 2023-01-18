import { Box, useColorModeValue, keyframes } from "@chakra-ui/react";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-35%) rotate(90deg);
  }
  50% {
    transform: translateY(0) rotate(90deg);
  }`;

const ArrowDown = () => (
  <Box
    my={24}
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    animation={`${bounce} 1s ease-in-out infinite`}
  >
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
      alt="arrow"
      style={{ filter: useColorModeValue("invert(0.6)", "invert(0.4)") }}
    />
  </Box>
);

export default ArrowDown;
