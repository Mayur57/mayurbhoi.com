/* eslint-disable react-hooks/rules-of-hooks */
import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const GridBackdrop = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 1 }}
  >
    <Box
      pos="absolute"
      display="flex"
      opacity={0.1}
      width="full"
      float="left"
      overflow="hidden"
      height={72}
      backgroundSize="36px 36px"
      pointerEvents="none"
      userSelect="none"
      backgroundImage="linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)"
      _after={{
        content: '""',
        display: "block",
        position: "absolute",
        width: "100%",
        height: "55%",
        bottom: 0,
        background: useColorModeValue(
          `linear-gradient(transparent, #FFF 40%) left repeat`,
          `linear-gradient(transparent, #121212 40%) left repeat`
        ),
      }}
    />
  </motion.div>
);

export default GridBackdrop;
