import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html land="en">
                <Head />
                <Body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </Body>
            </Html>
        )
    }
}