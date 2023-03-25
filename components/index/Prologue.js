import { Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../Section";

const Prologue = () => (
  <Section y={10} delay={0.2} mb={0}>
    <Text
      mb={6}
      fontSize="1em"
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
      <Link href="https://ncr.com">
        <a className="main-page-url" style={{ cursor: "ne-resize" }}>
          NCR
        </a>
      </Link>
      .
    </Text>
    <Text mb={6} fontWeight={300}>
      based in bengaluru, india
    </Text>
  </Section>
);

export default Prologue;
