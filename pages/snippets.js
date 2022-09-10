/* eslint-disable react/destructuring-assignment */
import { Container, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import Layout from "../components/layouts/Article";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { calculateAnimationDelay, getCMSBaseUrl } from "../libs/functions";
import { SnippetsGridItem } from "../components/grid/SnippetsGridItem";

function Snippets(props) {
  const { snippets } = props;
  return (
    <Layout title="Projects">
      <Container maxWidth="container.lg">
        <Section>
          <Subtitle>Code</Subtitle>
          <Title>Snippets &amp; Scripts</Title>
        </Section>
        <SimpleGrid columns={[1, 2, 2]} spacingX={10} spacingY={2} mt={12}>
          {snippets.map((snippet, index) => (
            <Section key={index} delay={calculateAnimationDelay(index)}>
              <SnippetsGridItem
                key={Math.random() * index}
                title={snippet.attributes.title}
                href={snippet.attributes.url}
              >
                {snippet.attributes.description}
              </SnippetsGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Snippets;

async function getSnippets() {
  const response = await fetch(`${getCMSBaseUrl()}/snippets?sort=id`).then(
    (res) => res.json()
  );

  const { data } = response;

  return data;
}

export const getStaticProps = async () => {
  const snippets = await getSnippets();
  return {
    revalidate: 7200,
    props: { snippets },
  };
};
