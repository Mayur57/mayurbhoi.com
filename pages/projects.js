import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import thumbPro1 from '../public/images/projects/blog-post-1.png'

const Work = () => {
    return (
      <Layout title="Projects">
        <Container>
          <Section delay={0.1}>
            <Heading as="h3" fontSize={36} mb={4} mt={8}>
              Projects
            </Heading>
          </Section>
          <SimpleGrid columns={[1, 1, 2]} gap={6} mt={4}>
            <Section delay={0.2}>
              <WorkGridItem
                id="project1"
                title="Project1"
                thumbnail={thumbPro1}
              >
                This is about project one.
              </WorkGridItem>
            </Section>
            <Section delay={0.2}>
              <WorkGridItem
                id="project1"
                title="Project1"
                thumbnail={thumbPro1}
              >
                This is about project one.
              </WorkGridItem>
            </Section>
            <Section delay={0.3}>
              <WorkGridItem
                id="project1"
                title="Project1"
                thumbnail={thumbPro1}
              >
                This is about project one.
              </WorkGridItem>
            </Section>
            <Section delay={0.3}>
              <WorkGridItem
                id="project1"
                title="Project1"
                thumbnail={thumbPro1}
              >
                This is about project one.
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    )
}

export default Work