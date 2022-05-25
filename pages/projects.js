import { Container, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import { calculateAnimationDelay } from "../libs/functions";

async function getPosts() {
  const response = await fetch(`http://localhost:1337/api/projects`).then(
    (res) => res.json()
  );

  const { data } = response;

  return data;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    revalidate: 10,
    props: { posts },
  };
};

function Work(props) {
  const { posts } = props;
  return (
    <Layout title="Projects">
      <Container maxWidth="container.lg">
        <Section>
          <Subtitle>Projects</Subtitle>
          <Title>Past Work &amp; Personal Projects</Title>
        </Section>
        <SimpleGrid columns={[1, 2, 2]} spacingX={10} spacingY={2} mt={12}>
          {posts.map((post, index) => (
            <Section key={index} delay={calculateAnimationDelay(index)}>
              <WorkGridItem
                id={post.attributes.slug}
                title={post.attributes.title}
                thumbnail={post.attributes.thumbnail}
              >
                {post.attributes.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Work;
