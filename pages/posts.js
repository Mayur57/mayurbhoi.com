import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'
import Section from '../components/section'
import { PostsGridItem } from '../components/grid-item'

import covid from '../public/images/projects/covid.jpg'
// import themitpost from '../public/images/projects/themitpost.png'
// import pride from '../public/images/projects/pride.png'
// import scalar from '../public/images/projects/scalar.png'

const POS = {
  TITLE: 0,
  DESC: 1,
  SLUG: 2,
  IMAGE: 3,
  DATE: 4,
}

// [Title, Description, Slug, Image URI]
const Articles = [
  [
    'Twitter Nuke',
    'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    'twitter-nuke',
    covid,
    '02 feb 2020',
  ],
]

const Posts = () => {
  return (
    <Layout title="Articles">
      <Container>
        <Subtitle>blog</Subtitle>
        <Title>Articles &amp; Opinions</Title>
        <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
          <Section delay={0.1}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
          <Section delay={0.1}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
          <Section delay={0.2}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
          <Section delay={0.2}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
          <Section delay={0.3}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
          <Section delay={0.3}>
            <PostsGridItem
              id={Articles[0][POS.SLUG]}
              title={Articles[0][POS.TITLE]}
              date={Articles[0][POS.DATE]}
              thumbnail={Articles[0][POS.IMAGE]}
              desc={Articles[0][POS.DESC]}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
