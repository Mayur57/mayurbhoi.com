import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";

const About = () => (
  <Layout title="Website">
    <Container>
      <Subtitle>Website</Subtitle>
      <Title>About Website</Title>
    </Container>
  </Layout>
);

export default About;
