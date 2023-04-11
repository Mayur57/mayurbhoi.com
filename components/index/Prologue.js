import { Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../Section";

const Prologue = () => (
  <Section y={10} delay={0.2} mb={0}>
    <Text
      mb={4}
      fontSize={["sm", "md", "md"]}
      letterSpacing="-0.01em"
      lineHeight={1.5}
      fontWeight={300}
      textAlign="justify"
    >
      creating impactful & elegant software. full stack engineer. unsatisfiably
      curious about design and high performance systems. trying to make a
      difference with code. relentlessly devoted to intricacy, efficiency, and
      detailed polish. always seeking out the cutting edge in my craft.
      currently at{" "}
      <Link href="https://ncr.com" style={{ textDecoration: "underline", textDecorationThickness: 0.9 ,textUnderlineOffset: 3 }}>
          NCR
      </Link>
      .
    </Text>
    <Text fontSize={["sm", "md", "md"]} mb={4} fontWeight={300}>
      based in bengaluru, india
    </Text>
    <Text fontSize={["sm", "md", "md"]} mb={4} fontWeight={300}>
      got something to say? write a note <Link href="/sign" style={{ textDecoration: "underline", textDecorationThickness: 0.9 ,textUnderlineOffset: 3 }}>here</Link>.
    </Text>
  </Section>
);

export default Prologue;
