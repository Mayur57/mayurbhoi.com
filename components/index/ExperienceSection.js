import {
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../section'

const ExperienceSection = () => {
  return (
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
  )
}

export default ExperienceSection