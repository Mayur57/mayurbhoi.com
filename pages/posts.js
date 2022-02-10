import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Posts = () => {
  return (
    <Layout title="Articles">
      <Container>
        <Heading as="h3" fontSize={36} mb={4} mt={8}>
          Articles
        </Heading>
      </Container>
    </Layout>
  )
}

export default Posts
export { getServerSideProps } from '../libs/cookies'