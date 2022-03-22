import { Heading, useColorModeValue } from "@chakra-ui/react";

const Title = ({ children }) => (
  <Heading
    as="h1"
    fontSize={36}
    color={useColorModeValue("#37352F", "#FEF6E5")}
    mt={2}
    mb={8}
    letterSpacing={-2}
  >
    {children}
  </Heading>
);

export default Title;
