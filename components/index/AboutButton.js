import Link from "next/link";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Section from "../Section";

const AboutButton = () => (
  <Section y={2} delay={0.3} mb={0}>
    <Link href="/about">
      <Box
        role="group"
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#888")}
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
          cursor: "pointer",
        }}
        py="1em"
        mt={12}
      >
        <Text mr="12px">more</Text>
        <Box
          transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
          _groupHover={{ transform: "translateX(8px)" }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
            alt="arrow"
            style={{ filter: useColorModeValue("invert(0)", "invert(1)") }}
          />
        </Box>
      </Box>
    </Link>
  </Section>
);

export default AboutButton;
