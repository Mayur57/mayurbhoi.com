import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Container,
  Text,
  Center,
  Button,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import Obfuscate from 'react-obfuscate'

const NotFound = () => {
  return (
    <Container>
      <Center>
        <Image src="https://i.ibb.co/ZXCktJK/404.png" width='400px' alt="404 image" />
      </Center>
      <Center>
        <Heading variant='pronouns' fontSize={20} opacity={0.6} mt={6}>
          404: page Not Found
        </Heading>
      </Center>
      <Center>
        <Text opacity={0.6} fontSize={16} maxW="70%" textAlign='center' mt={4}>
          Oops! Looks like you{`'`}ve wandered off to the unknown regions.
          {'\n'}
          Click below to go to the homepage or if you think this is a mistake,{' '}
          <Link href="#">
            <Obfuscate
              email="mayur072000@gmail.com"
              headers={{ subject: `I can't find this page!` }}
            >
              send me an email
            </Obfuscate>
          </Link>
          .
        </Text>
      </Center>
      <Center>
        <Box my={6} align="center">
          <NextLink href="/">
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
              home page
            </Button>
          </NextLink>
        </Box>
      </Center>
    </Container>
  )
}

export default NotFound
