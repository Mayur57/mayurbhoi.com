import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'

const About = () => (
    <Layout title="About">
      <Container>
        <Subtitle>About</Subtitle>
        <Title>Experience &amp; Background</Title>
      </Container>
    </Layout>
  )

export default About
