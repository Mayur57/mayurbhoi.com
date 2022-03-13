import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'
import Section from '../components/section'
import { PostsGridItem } from '../components/grid-item'
import articles from '../data/blogs'
import { calculateAnimationDelay } from '../libs/functions'

const Posts = () => (
    <Layout title="Articles">
      <Container>
        <Subtitle>blog</Subtitle>
        <Title>Articles &amp; Opinions</Title>
        <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
          {articles.map(
            ({ title, description, slug, image, published }, index) => (
                <Section key={index} delay={calculateAnimationDelay(index)}>
                  <PostsGridItem
                    id={slug}
                    title={title}
                    date={published}
                    thumbnail={image}
                    desc={description}
                  />
                </Section>
              )
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )

export default Posts
