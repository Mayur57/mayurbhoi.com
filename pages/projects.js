import { Container, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'

import covid from '../public/images/projects/covid.jpg'
import themitpost from '../public/images/projects/themitpost.png'
import pride from '../public/images/projects/pride.png'
import scalar from '../public/images/projects/scalar.png'

const POS = {
  TITLE: 0,
  DESC: 1,
  SLUG: 2,
  IMAGE: 3
}

// [Title, Description, Slug, Image URI]
const Projects = [
  [
    'Twitter Nuke',
    'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    'covid',
    covid
  ],
  [
    'Dynamic Header',
    'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    'covid',
    covid
  ],
  [
    'COVID-19 Resources Bot',
    'A Twitter bot that connects people willing to help with those in need. Written in Python 3.',
    'covid',
    covid
  ],
  [
    'The MIT Post App',
    'A Flutter app for the official media body of MIT, Manipal to serve content and notify students of notices and events.',
    'themitpost',
    themitpost
  ],
  [
    'The LGBTQ+ Community',
    'A website created as an attempt to spread awareness about lesser-known sub-communities of the LGBTQ community.',
    'pride',
    pride
  ],
  [
    'Dynamic Scaler',
    'A Flutter package that enables device dependent scaling of widgets using the built-in MediaQuery class.',
    'scalar',
    scalar
  ]
]

const Work = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Section>
          <Subtitle>Projects</Subtitle>
          <Title>Past Work &amp; Personal Projects</Title>
        </Section>
        <SimpleGrid columns={[1, 2, 2]} spacingX={4} spacingY={-1} mt={4}>
          <Section delay={0.1}>
            <WorkGridItem
              id={Projects[0][POS.SLUG]}
              title={Projects[0][POS.TITLE]}
              thumbnail={Projects[0][POS.IMAGE]}
            >
              {Projects[0][POS.DESC]}
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id={Projects[1][POS.SLUG]}
              title={Projects[1][POS.TITLE]}
              thumbnail={Projects[1][POS.IMAGE]}
            >
              {Projects[1][POS.DESC]}
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id={Projects[2][POS.SLUG]}
              title={Projects[2][POS.TITLE]}
              thumbnail={Projects[2][POS.IMAGE]}
            >
              {Projects[2][POS.DESC]}
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id={Projects[3][POS.SLUG]}
              title={Projects[3][POS.TITLE]}
              thumbnail={Projects[3][POS.IMAGE]}
            >
              {Projects[3][POS.DESC]}
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id={Projects[4][POS.SLUG]}
              title={Projects[4][POS.TITLE]}
              thumbnail={Projects[4][POS.IMAGE]}
            >
              {Projects[4][POS.DESC]}
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id={Projects[5][POS.SLUG]}
              title={Projects[5][POS.TITLE]}
              thumbnail={Projects[5][POS.IMAGE]}
            >
              {Projects[5][POS.DESC]}
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
