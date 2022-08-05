/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@chakra-ui/react";
import { GridItemStyle } from "../components/GridItem";
import HeaderSection from "../components/index/HeaderSection";

const Page = () => (
  <Container maxW="container.lg" alignContent="center" marginBottom={28}>
    <HeaderSection />
    <GridItemStyle />
  </Container>
);

export default Page;
