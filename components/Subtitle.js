import { Text, useColorModeValue } from "@chakra-ui/react";

const Subtitle = ({ children }) => (
  <Text
    lineHeight={1.5}
    fontWeight={500}
    fontSize={12}
    mt={12}
    letterSpacing={1.4}
    color={useColorModeValue("#805AD5", "#FE5B5E")}
    textTransform="uppercase"
  >
    {children}
  </Text>
);

export default Subtitle;
