import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Subtitle from "../components/subtitle";
import Title from "../components/title";

const About = () => (
  <Layout title="About Website">
    <Container maxW="container.md">
      <Subtitle>Website</Subtitle>
      <Title>About Website</Title>
      <Section>
        <p>
          An technical overview and an account of the journey building this
          website. Coming soon(-ish).
        </p>
      </Section>
    </Container>
  </Layout>
);

export default About;
