import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/inter'

const style = {
    global: props => ({
        body: {
            bg: mode('#F0E7DB', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlinOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3D7AED', '#FF63C3')(props),
            textUnderlinOffset: 3,
        })
    }
}

const fonts = {
    heading: 'Inter',
    body: 'Inter'
}

const colors = {
    glassTeal: "#88CCCA"
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