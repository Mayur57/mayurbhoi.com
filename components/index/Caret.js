/* eslint-disable @next/next/no-img-element */
import { Box, useColorModeValue } from "@chakra-ui/react";

const Caret = () => (
  <Box
    position="absolute"
    top="32px"
    right="32px"
    transition="all 400ms cubic-bezier(.25, 1, 1, 1)"
    _groupHover={{ right: "24px" }}
  >
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwxMCAxMEwxIDE5IiBzdHJva2U9ImJsYWNrIi8+Cjwvc3ZnPgo="
      alt="arrow"
      style={{ filter: useColorModeValue("invert(0)", "invert(1)") }}
    />
  </Box>
);

export default Caret;
