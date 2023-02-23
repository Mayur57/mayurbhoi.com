/* eslint-disable no-shadow */
import { Box, Container, Text } from "@chakra-ui/react";

// import { getFeaturedProject, getLatestPost } from "../libs/functions";
// import FeatureTile from"../components/index/FeatureTile";
// import Subtext from"../components/index/Subtext";
// import ArrowDown from"../components/index/ArrowDown";
// import Contact from"../components/index/Contact";
import { FiCommand } from "react-icons/fi";
import Prop from "../components/index/Prop";
import AboutButton from "../components/index/AboutButton";
import Prologue from "../components/index/Prologue";
import Header from "../components/index/Header";

const Page = () => (
  <Container maxW="container.sm" alignContent="center">
    <Box height="15vh" />
    <Prop />
    <Header />
    <Prologue />
    <AboutButton />
    <Box
      opacity={0.7}
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="center"
      mt={8}
    >
      <FiCommand size={10} />
      <Text fontSize={12} ml={2}>
        Press CMD+K to see options.
      </Text>
    </Box>
    {/* <ArrowDown />
    <FeatureTile
      sectionTitle="Projects"
      sectionDescription="I make things."
      header="Featured"
      itemTitle={project?.title}
      itemDescription={project?.description}
      itemLink={`/projects/${project?.slug}`}
      categoryLink="/projects"
      action="see all projects"
    />
    <FeatureTile
      sectionTitle="Articles"
      sectionDescription="I write things."
      header="Latest"
      itemTitle={post?.title}
      itemDescription={post?.description}
      action="read all articles"
      itemLink={`/posts/${post?.slug}`}
      categoryLink="/posts"
    />
    <Contact />
    <Subtext /> */}
  </Container>
);

export default Page;

// export const getStaticProps = async () => {
//   const post = await getLatestPost();
//   const project = await getFeaturedProject();
//   return post
//     ? {
//         props: { post: post.attributes, project: project.attributes },
//       }
//     : {
//         props: {
//           post: [],
//           project: [],
//           error: "Error retrieving articles. Server returned invalid response.",
//         },
//       };
// };
