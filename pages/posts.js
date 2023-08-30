/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import moment from "moment";
import readingTime from "reading-time";
import { motion } from "framer-motion";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";
import Section from "../components/Section";
import { PostsGridItem } from "../components/grid/PostGridItem";
import { getCMSBaseUrl } from "../libs/functions";
import Scribble from "../components/Scribble";

const Posts = ({ posts }) => (
  <Layout title="Articles" section>
    <Container maxW="container.sm">
      <Title mb={2}>thoughts</Title>
      <SimpleGrid columns={[1, 1, 1]} spacing={0} mt={{ base: 4, md: 8 }}>
        <Section mb={0}>
          {posts.map(({ attributes }) => (
            <PostsGridItem
              id={attributes.slug}
              title={attributes.title}
              date={attributes.uploaded}
              desc={attributes.description}
              readingTime={attributes.readingTime.text}
              tag={attributes.tag}
            />
          ))}
        </Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Scribble />
          <Box w="100%" align="center">
            <Text
              letterSpacing="0.02em"
              fontWeight={400}
              lineHeight={1.5}
              opacity={0.5}
              fontSize={11}
              mt="3em"
              mb="2em"
            >
              That&apos;s all! More to come soon.
            </Text>
          </Box>
        </motion.div>
      </SimpleGrid>
      <Box height={{ base: "12vh", md: "2vh" }} />
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
  if (posts) {
    posts.forEach((post) => {
      const publishedDate = post.attributes.uploaded;
      const formattedDate = moment(publishedDate).format("DD MMMM YYYY");
      post.attributes.uploaded = formattedDate;
      post.attributes.sortId = moment(publishedDate).format("YYYYMMDD");
      post.attributes.readingTime = readingTime(post.attributes.body);
    });

    posts.sort((a, b) => b.attributes.sortId - a.attributes.sortId);
    return {
      revalidate: 90,
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
