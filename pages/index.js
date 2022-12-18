import { Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { GridItemStyle } from "../components/grid/GridItemStyle";

const DynamicHeaderComponent = dynamic(() =>
  import("../components/index/HeaderSection").then((module) => module.default)
);

const Page = () => (
  <Container maxW="container.lg" alignContent="center" marginBottom={28}>
    <DynamicHeaderComponent />
    <GridItemStyle />
  </Container>
);

export default Page;
