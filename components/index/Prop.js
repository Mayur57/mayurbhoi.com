/* eslint-disable react/destructuring-assignment */
import { Box, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section";
import CommandButton from "../CommandButton";

const Prop = () => (
  <Section y={0} mb={0}>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box
        height="1.25em"
        width="1.25em"
        bgColor={useColorModeValue("#FF5C00", "#FFB346")}
        borderRadius="50%"
      />
      <CommandButton />
    </Box>
  </Section>
);

export default Prop;
