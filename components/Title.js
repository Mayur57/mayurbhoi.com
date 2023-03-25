/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Title = (props) => (
  <Heading
    as="h1"
    letterSpacing="-0.04em"
    fontSize="2.8rem"
    color={useColorModeValue("#281D1A", "#EDEDED")}
    mt={2}
    mb={8}
    {...props}
  />
);

export default Title;
