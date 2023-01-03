import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Theme toggle"
      backgroundColor={useColorModeValue('white', '#111')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeButton;
