import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../Section";

const TextWrapper = ({ children }) => (
  <Text
    mt="1rem"
    fontSize={[12, 14, 14]}
    letterSpacing="-0.005em"
    lineHeight={1.75}
    fontWeight={300}
    textAlign="justify"
    _first={{
      mt: 0,
    }}
  >
    {children}
  </Text>
);

const LinkWrapper = ({ children }) => (
  <Box
    display="inline-block"
    textDecoration="underline"
    textDecorationThickness={0.9}
    textUnderlineOffset={3}
    transition="all 250ms ease-in-out"
    _hover={{ opacity: 0.6, textUnderlineOffset: 5 }}
  >
    {children}
  </Box>
);

const Prologue = () => (
  <Section y={10} delay={0.2} mb={0}>
    <TextWrapper>
      creating impactful & elegant software. full stack engineer. unsatisfiably
      curious about design and high performance systems. trying to make a
      difference with code. relentlessly devoted to intricacy, efficiency, and
      detailed polish. always seeking out the cutting edge in my craft.
      currently at{" "}
      <Link href="https://ncr.com">
        <LinkWrapper>NCR</LinkWrapper>
      </Link>
      .
    </TextWrapper>
    <TextWrapper>based in bengaluru, india</TextWrapper>
    <TextWrapper>
      got something to say? write a note{" "}
      <Link
        href="/sign"
        style={{
          textDecoration: "underline",
          textDecorationThickness: 0.9,
          textUnderlineOffset: 3,
        }}
      >
        <LinkWrapper>here</LinkWrapper>
      </Link>
      .
    </TextWrapper>
  </Section>
);

export default Prologue;
