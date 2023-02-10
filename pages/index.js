/* eslint-disable no-shadow */
import { Box, Container } from "@chakra-ui/react";
import { Command } from 'cmdk';

import { useEffect, useState } from "react";
import { getFeaturedProject, getLatestPost } from "../libs/functions";
import FeatureTile from"../components/index/FeatureTile";
import Subtext from"../components/index/Subtext";
import ArrowDown from"../components/index/ArrowDown";
import Contact from"../components/index/Contact";
import Prop from"../components/index/Prop";
import AboutButton from"../components/index/AboutButton";
import Prologue from"../components/index/Prologue";
import Header from"../components/index/Header";


const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog>
  );
};

const Page = ({ post, project }) => (
  <Container maxW="container.sm" alignContent="center">
<CommandMenu />
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
