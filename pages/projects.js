import {
  Box,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import Section from "../components/Section";
import { ProjectsGridItem } from "../components/grid/ProjectGridItem";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";
import { calculateAnimationDelay, getCMSBaseUrl } from "../libs/functions";

function Work(props) {
  const { posts } = props;
  return (
    <Layout title="Projects">
      <Container maxWidth="container.lg">
        <Section mb={0}>
          <Title mb={0}>
            projects
          </Title>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} spacingX={8} mt={8}>
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
        <Box height={{ base:"12vh", md:"15vh" }} />
      </Container>
    </Layout>
  );
}

export default Work;

async function getPosts() {
  const response = await fetch(
    `${getCMSBaseUrl()}/projects?sort[0]=featured:desc&sort[1]=id`
  );
  const { data } = await response.json();

  return data;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    revalidate: 7200,
    props: { posts },
  };
};
