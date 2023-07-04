import { Container, Text } from "@chakra-ui/react";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";

const About = () => (
  <Layout title="About Website">
    <Container maxW="container.md">
      <Title mb={4}>the website</Title>
        <Text fontSize={14} opacity={0.6}>
          A technical deepdive and an account of the learnings building this
          website. Coming soon(-ish).
        </Text>
    </Container>
  </Layout>
);

export default About;
