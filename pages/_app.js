import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import { Global, css } from '@emotion/react'
import 'focus-visible/dist/focus-visible'
import theme from '../libs/theme'

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
