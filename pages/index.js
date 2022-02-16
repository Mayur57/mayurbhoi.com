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
import Social from '../components/social'

const Page = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Box
          display={{ md: 'flex' }}
          alignItems="center"
          padding="55px 0px 0px 0px"
        >
          <Box flexGrow={1}>
            <Heading
              as="h2"
              variant="page-title"
              fontSize={52}
              letterSpacing="-0.05em"
            >
              Mayur Bhoi
            </Heading>
            <p style={{ opacity: 0.7, marginTop: 2 }}>software developer + product designer</p>
            <Heading
              as="h6"
              variant="pronouns"
              opacity={0.9}
              color={useColorModeValue('purple.600', 'teal.200')}
            >
              he/him/his
            </Heading>
            <Box mt={3} ml={1}>
              <Social spacing="10px" size={20} />
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              backgroundColor={useColorModeValue('purple.100', 'teal.100')}
              borderWidth={4}
              borderStyle="solid"
              maxWidth="160px"
              display="inline-block"
              borderRadius="100px"
              src="/images/me.png"
              alt="Profile Picture"
              boxShadow="lg"
              transition="250ms"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'xl',
                transition: '250ms',
                borderColor: useColorModeValue('purple.300', 'teal.400')
              }}
            />
          </Box>
        </Box>
        <Box
          borderRadius="lg"
          // TODO: See if this is good
          bg={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.3)'
          )}
          fontSize={16}
          p={3}
          mb={6}
          mt={8}
          align="center"
          // fontWeight="bolder"
          // color={useColorModeValue(
          //   'purple.400',
          //   'teal.300'
          // )}
          // opacity={0.7}
          text-align="justify"
          text-justify="auto"
        >
          Writing efficient and pragmatic software.
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
