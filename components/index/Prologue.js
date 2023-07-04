import { Text } from "@chakra-ui/react";
import Section from "../Section";

const TextWrapper = ({ children }) => (
  <Text
    mt="1rem"
    fontSize={14}
    letterSpacing="-0.005em"
    lineHeight={1.65}
    fontWeight={300}
    textAlign="justify"
    _first={{
      mt: 0,
    }}
  >
    {children}
  </Text>
);

const Prologue = () => (
  <Section y={4} delay={0.2} mb={0}>
    <TextWrapper>
      creating impactful & elegant software. full stack engineer. unsatisfiably
      curious about design and high performance systems. trying to make a
      difference with code. relentlessly devoted to intricacy, efficiency, and
      detailed polish. always seeking out the cutting edge in my craft.
      welcome to my little place on the internet.
    </TextWrapper>
    <TextWrapper>based in bengaluru, india</TextWrapper>
  </Section>
);

export default Prologue;
