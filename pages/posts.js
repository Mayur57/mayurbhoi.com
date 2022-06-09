/* eslint-disable no-param-reassign */
import { Container, SimpleGrid } from "@chakra-ui/react";
import moment from "moment";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import Section from "../components/section";
import { PostsGridItem } from "../components/GridItem";
import { calculateAnimationDelay, getCMSBaseUrl } from "../libs/functions";

const Posts = ({ posts }) => (
  <Layout title="Articles">
    <Container maxW="container.lg">
      <Subtitle>blog</Subtitle>
      <Title>Articles &amp; Opinions</Title>
      <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
        {posts.map(({ attributes }, index) => {
          console.log(attributes.sortId);
          return (
            <Section key={index} delay={calculateAnimationDelay(index)}>
              <PostsGridItem
                id={attributes.slug}
                title={attributes.title}
                date={attributes.uploaded}
                thumbnail={attributes.thumbnail}
                desc={attributes.description}
                tag={attributes.tag}
              />
            </Section>
          );
        })}
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Posts;

async function getPosts() {
  const response = await fetch(`${getCMSBaseUrl()}/posts`).then((res) =>
    res.json()
  );

  const { data } = response;

  return data;
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  posts.forEach((post) => {
    const publishedDate = post.attributes.uploaded;
    const formattedDate = moment(publishedDate).format("D MMMM YYYY");
    post.attributes.uploaded = formattedDate;
    post.attributes.sortId = moment(publishedDate).format("YYYYMMDD");
  });
  // const publishedDate = posts.attributes
  return {
    revalidate: 7200,
    props: { posts },
  };
};
