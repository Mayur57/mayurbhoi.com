import { Text } from "@chakra-ui/react";
import Section from "../Section";

const Header = () => (
  <Section y={10} mb={0} delay={0.1}>
    <Text fontSize="48px" fontWeight={500} mt={6} letterSpacing="-0.04em">
      hey
    </Text>
    <Text my={6} fontSize="18px" fontWeight={500} letterSpacing="-0.03em">
      mayur bhoi
    </Text>
  </Section>
);

export default Header;
