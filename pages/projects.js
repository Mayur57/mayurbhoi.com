import { Container, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import projects from "../data/projects";
import { calculateAnimationDelay } from "../libs/functions";

function Work() {
  return (
    <Layout title="Projects">
      <Container>
        <Section>
          <Subtitle>Projects</Subtitle>
          <Title>Past Work &amp; Personal Projects</Title>
        </Section>
        <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
          {projects.map(({ title, description, slug, image }, index) => (
            <Section key={index} delay={calculateAnimationDelay(index)}>
              <WorkGridItem id={slug} title={title} thumbnail={image}>
                {description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Work;
