import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading, Container, Text, Center, Button, useColorModeValue } from '@chakra-ui/react'

const NotFound = () => {
    return (
      <Container mt={75}>
        <Center>
          <Heading as="h1" fontSize={32} opacity={0.9} fontWeight="500">
            404: Not Found
          </Heading>
        </Center>
        <Center>
          <Text opacity={0.6} fontSize={16}>
            Oops! The page you are looking for does not exist :(
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