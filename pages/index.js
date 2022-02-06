import {
  Container,
  Heading,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'

const Page = () => {
  //TODO: Remove placeholder text and add correct details and description
  return (
    <Container>
      <Box display={{ md: 'flex' }} padding="55px 0px 0px 0px">
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            fontSize={48}
            letterSpacing="-0.05em"
          >
            Mayur Bhoi
          </Heading>
          <p>Software Developer</p>
          <Heading
            as="h6"
            color={useColorModeValue('purple', 'teal.400')}
            fontFamily='"Inter", sans-serif'
            fontWeight="500"
            fontStyle="normal"
            letterSpacing="0.19em"
            lineHeight="25px"
            fontSize={13}
            textTransform="uppercase"
          >
            he/him/his
          </Heading>
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
            src="/images/me.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        mt="25px"
        bg={useColorModeValue(
          'rgba(121, 96, 206, 0.3)',
          'rgba(56,178,172, 0.3)'
        )}
        fontSize={16}
        p={3}
        mb={6}
        align="center"
        text-align="justify"
        text-justify="auto"
      >
        I make computers do stuff for me.
      </Box>
      <Section delay={0.1}>
        <Heading
          as="h3"
          variant="section-title"
          textUnderlineOffset={5}
          textDecorationThickness={2}
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.3)'
          )}
          letterSpacing="-0.05em"
        >
          About
        </Heading>
        <p>
          I am a self-taught full-stack developer with a rich background in developing
          mobile apps. I have a knack for writing intricatly designed,
          responsive software to solve problems. I like writing scripts to
          automate my tasks and routine.
        </p>
        <Box
          borderRadius="lg"
          mt="25px"
          bg={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.3)'
          )}
          fontSize={16}
          p={3}
          mb={6}
          align="center"
          text-align="justify"
          text-justify="auto"
        >
          lol
        </Box>
      </Section>
    </Container>
  )
}

export default Page
