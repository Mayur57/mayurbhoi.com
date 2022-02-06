import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Posts = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Articles
      </Heading>
    </Container>
  )
}

export default Posts
