import { Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../Section";

const Prologue = () => (
  <Section y={2} delay={0.2} mb={0}>
    <Text
      mb={6}
      fontSize={16}
      letterSpacing="-0.01em"
      lineHeight={1.5}
      textAlign="justify"
    >
      creating impactful & elegant software. full stack engineer. unsatisfiably
      curious about design and high performance systems. trying to make a
      difference with code. relentlessly devoted to intricacy, efficiency, and
      detailed polish. always seeking out the cutting edge in my craft.
      currently at{" "}
      <Link href="https://ncr.com">
        <a className="main-page-url">NCR</a>
      </Link>
      .
    </Text>
    <Text mb={6}>based in bengaluru, india</Text>
  </Section>
);

export default Prologue;
