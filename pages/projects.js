import { Container, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'

import covid from '../public/images/projects/covid.jpg'
// import themitpost from '../public/images/projects/themitpost.png'
// import pride from '../public/images/projects/pride.png'
// import scalar from '../public/images/projects/scalar.png'

// [Title, Description, Slug, Image URI]
// TODO: Use .map() to generate the project posts
const projects = [
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  },
  {
    title: 'Twitter Nuke',
    description:
      'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    slug: 'twitter-nuke',
    image: covid
  }
]

const calculateAnimationDelay = index => {
  return Math.round(((index + 1) / 20) * 10) / 10
}

function Work() {
  return (
    <Layout title="Projects">
      <Container>
        <Section>
          <Subtitle>Projects</Subtitle>
          <Title>Past Work &amp; Personal Projects</Title>
        </Section>
        <SimpleGrid columns={[1, 2, 2]} spacingX={-2} spacingY={-2} mt={4}>
          {projects.map(({ title, description, slug, image }, index) => {
            return (
              <Section key={index} delay={calculateAnimationDelay(index)}>
                <WorkGridItem id={slug} title={title} thumbnail={image}>
                  {description}
                </WorkGridItem>
              </Section>
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
