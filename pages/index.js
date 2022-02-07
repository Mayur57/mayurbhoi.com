import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import {
  ExperienceCompany,
  ExperienceSection,
} from '../components/experience'

const Page = () => {
  //TODO: Remove placeholder text and add correct details and description
  return (
    <Container>
      <Section delay={0.1}>
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
              variant="pronouns"
              color={useColorModeValue('purple', 'teal.400')}
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
      </Section>
      <Section delay={0.2}>
        <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.3)'
          )}
        >
          About
        </Heading>
        <Paragraph>
          I am a self-taught full-stack developer with a rich background in
          developing mobile apps. I have a knack for writing intricately
          designed, responsive software to solve problems. I like writing
          scripts to automate my tasks and routine.
        </Paragraph>
        <Box align="center" my={4} mt="30px">
          <NextLink href="/works">
            <Button
              variant="new-tab-action"
              rightIcon={<ChevronRightIcon />}
              bgColor={useColorModeValue(
                'rgba(121, 96, 206, 0.3)',
                'rgba(56,178,172, 0.3)'
              )}
              borderColor={useColorModeValue(
                'rgba(121, 96, 206, 0.4)',
                'rgba(56,178,172, 0.4)'
              )}
            >
              see projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          mt="45px"
          textDecorationColor={useColorModeValue(
            'rgba(121, 96, 206, 0.3)',
            'rgba(56,178,172, 0.3)'
          )}
        >
          Experience
        </Heading>
        <ExperienceSection>
          <ExperienceCompany>Authenticating.com</ExperienceCompany>&nbsp;-
          Software Engineering Intern
          <Heading
            variant="pronouns"
            color={useColorModeValue('purple', 'teal.400')}
          >
            Feb 2022 - Present
          </Heading>
        </ExperienceSection>

        <ExperienceSection>
          <ExperienceCompany>Sigma Tenant</ExperienceCompany>&nbsp;- Software
          Engineering Intern
          <Heading
            variant="pronouns"
            color={useColorModeValue('purple', 'teal.400')}
          >
            Apr 2021 - May 2021
          </Heading>
        </ExperienceSection>

        <ExperienceSection>
          <ExperienceCompany>The MIT Post</ExperienceCompany>&nbsp;- Head of App
          Development
          <Heading
            variant="pronouns"
            color={useColorModeValue('purple', 'teal.400')}
          >
            Aug 2019 - jul 2021
          </Heading>
        </ExperienceSection>
      </Section>
    </Container>
  )
}

export default Page
