import { Container, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import { ProjectsGridItem } from "../components/grid/ProjectGridItem";
import Layout from "../components/layouts/Article";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { calculateAnimationDelay, getCMSBaseUrl } from "../libs/functions";

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
              <ProjectsGridItem
                id={post.attributes.slug}
                title={post.attributes.title}
                thumbnail={post.attributes.thumbnail}
              >
                {post.attributes.description}
              </ProjectsGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Work;

async function getPosts() {
  const response = await fetch(`${getCMSBaseUrl()}/projects`).then((res) =>
    res.json()
  );

  const { data } = response;

  return data;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    revalidate: 7200,
    props: { posts },
  };
};
