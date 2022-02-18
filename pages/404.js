import {
  Heading,
  Text,
  Center,
  Image,
  Link,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Obfuscate from 'react-obfuscate'
import LinkButton from '../components/linkButton'
import { EmailIcon } from '@chakra-ui/icons'

const NotFound = () => {
  const image404 = `/images/404/404${useColorModeValue('-01', '-02')}.png`
  return (
    <Container>
      <Section mb={0}>
        <Center mb={8}>
          <Image src={image404} width="100px" alt="404 image" mt='6em'/>
        </Center>
      </Section>
      <Section delay={0.1} mb={0}>
        <Center>
          <Heading variant="pronouns" fontSize={16} opacity={0.6} mt={6}>
            404: page Not Found
          </Heading>
        </Center>
      </Section>
      <Section delay={0.2} mb={0}>
        <Center>
          <Text
            opacity={0.6}
            fontSize={14}
            maxW="360px"
            textAlign="justify"
            mt={4}
          >
            Oops! Looks like you{`'`}ve wandered off into the unknown. Click
            below to go to the homepage or if you think this is a mistake:{' '}
            <Link href="#">
              <Obfuscate
                email="mayur072000@gmail.com"
                headers={{ subject: `I can't find this page!` }}
              >
                send me an email
              </Obfuscate>
            </Link>
            <EmailIcon ml={1.5} mb={0.5} />
          </Text>
        </Center>
      </Section>
      <Section delay={0.3} mb={0}>
        <Center>
          <LinkButton link="/">Home</LinkButton>
        </Center>
      </Section>
    </Container>
  )
}

export default NotFound
