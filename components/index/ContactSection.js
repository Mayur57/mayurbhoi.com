import {
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../section'

const ContactSection = () => {
  return (
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
      <Text>
        {' '}
        Want to build something cool or have questions? My inbox is always open! Whether you have a question, want to build
        something together, or just want to say hi, I&apos;ll try my best to get
        back to you!
      </Text>
    </Section>
  )
}

export default ContactSection