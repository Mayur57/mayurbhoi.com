import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Subtitle from '../components/subtitle'
import Title from '../components/title'

const Posts = () => {
  return (
    <Layout title="Articles">
      <Container>
        <Subtitle>blog</Subtitle>
        <Title>Articles &amp; Opinions</Title>
      </Container>
    </Layout>
  )
}

export default Posts