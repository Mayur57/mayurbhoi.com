import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      display="inline"
      p={2}
      aria-label="Theme toggle"
      backgroundColor="transparent"
      fontSize="12px"
      onClick={toggleColorMode}
      cursor="pointer"
    >
      {useColorModeValue(<MoonIcon />, <SunIcon />)}
    </Box>
  );
};

export default ThemeButton;
