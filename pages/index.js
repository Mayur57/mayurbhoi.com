import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import { getFeaturedProject, getLatestPost } from "../libs/functions";

const FeatureTile = dynamic(() => import("../components/index/FeatureTile"));
const Subtext = dynamic(() => import("../components/index/Subtext"));
const ArrowDown = dynamic(() => import("../components/index/ArrowDown"));
const Contact = dynamic(() => import("../components/index/Contact"));
const Prop = dynamic(() => import("../components/index/Prop"));
const AboutButton = dynamic(() => import("../components/index/AboutButton"));
const Prologue = dynamic(() => import("../components/index/Prologue"));
const Header = dynamic(() => import("../components/index/Header"));

const Page = ({ post, project }) => (
  <Container maxW="container.sm" alignContent="center">
    <Box height="15vh" />
    <Prop />
    <Header />
    <Prologue />
    <AboutButton />
    <ArrowDown />
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
    <Subtext />
  </Container>
);

export default Page;

export const getStaticProps = async () => {
  const post = await getLatestPost();
  const project = await getFeaturedProject();
  return post
    ? {
        props: { post: post.attributes, project: project.attributes },
      }
    : {
        props: {
          post: [],
          project: [],
          error: "Error retrieving articles. Server returned invalid response.",
        },
      };
};
