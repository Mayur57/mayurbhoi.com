import { Box, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section";

const Prop = () => (
  <Section y={0} mb={0}>
    <Box
      height="1.25em"
      width="1.25em"
      bgColor={useColorModeValue("#FF5C00", "#FFB346")}
      borderRadius="50%"
    />
  </Section>
);

export default Prop;
