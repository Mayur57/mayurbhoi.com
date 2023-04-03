/* eslint-disable no-shadow */
import { Box, Container, Text } from "@chakra-ui/react";
import { FiCommand } from "react-icons/fi";
import Prop from "../components/index/Prop";
import AboutButton from "../components/index/AboutButton";
import Prologue from "../components/index/Prologue";
import Header from "../components/index/Header";

const Page = () => (
  <Container maxW="container.sm" overflow="hidden">
    <Box height="15vh" />
    <Prop />
    <Header />
    <Prologue />
    <AboutButton />
    <Box
      opacity={0.7}
      display={{ base: "none", sm: "flex" }}
      width="100%"
      alignItems="center"
      justifyContent="center"
      mt={8}
      mb={12}
    >
      <FiCommand size={10} />
      <Text fontSize={12} ml={2}>
        Press CMD+K to get started
      </Text>
    </Box>
  </Container>
);

export default Page;
