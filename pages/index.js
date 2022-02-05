import { Container, Heading, Box } from "@chakra-ui/react"

const Page = () => {
  //TODO: Remove placeholder text and add correct details and description
  return (
    <Container>
      <Box borderRadius="lg" bg="pink" p={3} mb={6} align="center">
        hello i am dev
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mayur Bhoi
          </Heading>
          <p> Software Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
