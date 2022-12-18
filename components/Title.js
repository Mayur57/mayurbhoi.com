/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";

const Title = (props) => (
  <Heading
    as="h1"
    fontSize={38}
    color={useColorModeValue("#37352F", "#EEE")}
    mt={2}
    mb={6}
    {...props}
  />
);

export default Title;
