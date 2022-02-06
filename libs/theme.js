import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/inter'

const style = {
  global: props => ({
    body: {
      bg: mode('#FFFFFF', '#202020')(props)
    }
  })
}

const components = {
  Button: {
    variants: {
      'new-tab-action': {
        textTransform: 'uppercase',
        fontSize: 12,
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: '0.19em',
        borderWidth: 1,
      }
    }
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 24,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        textUnderlineOffset: 6,
        marginTop: 3,
        marginBottom: 2,
        letterSpacing: '-0.05em'
      },
      pronouns: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: '0.19em',
        lineHeight: '25px',
        fontSize: 13,
        textTransform: 'uppercase'
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3D7AED', '#FF63C3')(props),
      textUnderlinOffset: 3
    })
  }
}

const fonts = {
  heading: 'Inter',
  body: 'Inter'
}

const colors = {
  glassTeal: '#88CCCA'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  style,
  components,
  colors,
  fonts
})

export default theme
