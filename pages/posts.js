/* eslint-disable no-param-reassign */
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import moment from "moment";
import readingTime from "reading-time";
import Layout from "../components/layouts/Article";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Section from "../components/Section";
import { PostsGridItem } from "../components/grid/PostGridItem";
import { calculateAnimationDelay, getCMSBaseUrl } from "../libs/functions";

const Posts = ({ posts, error }) => {
  if (error) {
    return (
      <Layout title="Articles">
        <Container
          maxW="container.md"
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Subtitle>Something went wrong</Subtitle>
          <Text>{error}</Text>
        </Container>
      </Layout>
    );
  }
  return (
    <Layout title="Articles">
      <Container maxW="container.lg">
        <Subtitle>blog</Subtitle>
        <Title fontWeight={800} letterSpacing={-2}>
          Articles &amp; Opinions
        </Title>
        <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
          {posts.map(({ attributes }, index) => (
            <Section key={index} delay={calculateAnimationDelay(index)}>
              <PostsGridItem
                id={attributes.slug}
                title={attributes.title}
                date={attributes.uploaded}
                thumbnail={attributes.thumbnail}
                desc={attributes.description}
                readingTime={attributes.readingTime.text}
                tag={attributes.tag}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

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
  if (posts) {
    posts.forEach((post) => {
      const publishedDate = post.attributes.uploaded;
      const formattedDate = moment(publishedDate).format("DD MMM YYYY");
      post.attributes.uploaded = formattedDate;
      post.attributes.sortId = moment(publishedDate).format("YYYYMMDD");
      post.attributes.readingTime = readingTime(post.attributes.body);
    });

    posts.sort((a, b) => b.attributes.sortId - a.attributes.sortId);
    return {
      revalidate: 7200,
      props: { posts },
    };
  }
  return {
    props: {
      posts: [],
      error: "Error retrieving articles. Server returned invalid response.",
    },
  };
};
