/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Title = (props) => (
  <Heading
    as="h1"
    letterSpacing="-0.05em"
    fontSize={36}
    fontWeight={600}
    color={useColorModeValue("#281D1A", "#EDEDED")}
    mt={2}
    mb={8}
    {...props}
  />
);

export default Title;
