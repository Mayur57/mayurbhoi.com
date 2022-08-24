import { Container, Text } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Subtitle from "../components/subtitle";
import Title from "../components/title";

const Code = ({ children }) => (
  <>
    <Text
      fontFamily={`'Space Grotesk', 'Jetbrains Mono', monospace`}
      textAlign="center"
      fontSize={14}
      textTransform="uppercase"
      fontWeight="bold"
      letterSpacing="2.5px"
      mt={8}
    >
      latest commit
    </Text>
    <Text
      fontFamily={`'Space Grotesk', 'Jetbrains Mono', monospace`}
      fontSize="0.8em"
      opacity={0.7}
      textAlign="center"
      mt={1}
    >
      {children}
    </Text>
  </>
);

const About = ({ commit }) => (
  <Layout title="About Website">
    <Container maxW="container.md">
      <Subtitle>Website</Subtitle>
      <Title>About Website</Title>
      <Section>
        <p>
          A technical deepdive and an account of the learnings building this
          website. Coming soon(-ish).
        </p>
        <Code>
          {commit.commit.message} @ {commit.commit.author.date}
          <br />
          {commit.sha}
        </Code>
      </Section>
    </Container>
  </Layout>
);

export default About;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.github.com/repos/mayur57/mosaic/commits/master",
    {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    }
  );
  const result = await res.json();
  return {
    props: {
      commit: result,
    },
  };
};
