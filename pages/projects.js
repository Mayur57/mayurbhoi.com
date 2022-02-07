import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import thumbPro1 from '../public/images/projects/blog-post-1.png'

const Work = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={28} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="project-1" thumbnail={thumbPro1}>
                        This is about project one.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Work