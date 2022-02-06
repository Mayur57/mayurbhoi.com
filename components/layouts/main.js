import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../nav.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mayur Bhoi | Developer and Designer</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
