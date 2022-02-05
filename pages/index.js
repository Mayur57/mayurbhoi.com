import { Container, Heading, Box, Image, useColorModeValue} from '@chakra-ui/react'
import theme from '../libs/theme'

const Page = () => {
  //TODO: Remove placeholder text and add correct details and description
  return (
    <Container>
      <Box borderRadius="lg" bg="pink" p={3} mb={6} align="center">
        hello i am dev
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" letterSpacing="-0.05em">
            Mayur Bhoi
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="lg"
            src="/images/me.png"
            alt="Profile Picture"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
