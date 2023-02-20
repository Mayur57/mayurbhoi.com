/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Title = (props) => (
  <Heading
    as="h1"
    fontWeight={600}
    letterSpacing='-0.04em'
    fontSize={38}
    color={useColorModeValue("#000", "#EEE")}
    mt={2}
    mb={8}
    {...props}
  />
);

export default Title;
