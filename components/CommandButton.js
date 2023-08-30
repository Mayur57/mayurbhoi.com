import { Button } from "@chakra-ui/react";
import { useKmenu } from "kmenu";
import { FiCommand } from "react-icons/fi";

const CommandButton = () => {
  const { toggle } = useKmenu();
  return (
    <Button
      display={{ base: "none", md: "flex" }}
      onClick={toggle}
      bg="transparent"
      p={0}
      alignItems="center"
      title="Open Command Palette"
    >
      <FiCommand size={28} opacity={0.8} />
    </Button>
  );
};

export default CommandButton;
