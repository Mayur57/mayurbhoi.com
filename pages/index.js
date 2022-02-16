import {
  Container,
  Heading,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ProjectsGridItemIndex, GridItemStyle } from '../components/grid-item'
import LinkButton from '../components/linkButton'
import thumbPro1 from '../public/images/projects/blog-post-1.png'

const Page = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Box display={{ md: 'flex' }} alignItems='flex-start' padding="55px 0px 0px 0px">
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
              variant="pronouns"
              color={useColorModeValue('purple.400', 'teal.200')}
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
              backgroundColor="#64ffda"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="lg"
              src="/images/me.jpg"
              alt="Profile Picture"
              boxShadow="lg"
              transition='250ms'
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'xl',
                transition: '250ms',
                borderColor: useColorModeValue('purple.200', 'teal.200')
              }}
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
      </Section>
      <Section delay={0.2}>
        {/* <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.5)'
          )}
        >
          About
        </Heading> */}
        <Paragraph>
          I am a self-taught full-stack developer with a rich background in
          developing mobile apps. I have a knack for writing intricately
          designed, responsive software to solve problems. I like writing
          scripts to automate my tasks and routine.
        </Paragraph>
        <LinkButton link="/about">about</LinkButton>
      </Section>
      <GridItemStyle />
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.5)'
          )}
        >
          Experience
        </Heading>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.5)'
          )}
        >
          Featured Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={4}>
          <ProjectsGridItemIndex
            id="project1"
            title="Dynamic Header"
            thumbnail={thumbPro1}
            sourcelink="https://github.com/mayur57"
            desc="Changes Twitter header dynamically to update the latest followers and more."
          />
          <ProjectsGridItemIndex
            id="project1"
            title="Twitter Nuke"
            thumbnail={thumbPro1}
            sourcelink="https://github.com/mayur57"
            bloglink="https://github.com/mayur57"
            desc="Quickly and efficiently delete your entire tweet history using your Twitter archive."
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.4}>
        <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          mb="20px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.5)'
          )}
        >
          Get In Touch
        </Heading>
      </Section>
    </Container>
  )
}

export default Page
