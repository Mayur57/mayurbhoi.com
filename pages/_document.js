import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme'

const TITLE = 'Mayur Bhoi';
const DESCRIPTION = 'I writing efficient and pragmatic software.';
const CARD_IMAGE_URL = 'https://i.ibb.co/QXF8FqG/banner.png';
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Metadata about the website for SEO */}
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={DESCRIPTION} />
          <meta name="keywords" content="mayur, bhoi, HTML, CSS, JavaScript, Python, Java, C++, portfolio" />
          <meta name="author" content="Mayur Bhoi" />

          {/* Metadata for OpenGraph */}
          <meta property="og:image" content={CARD_IMAGE_URL} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mayurbhoi.com" />

          {/* Metadata for Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mayurbhoii" />
          <meta name="twitter:creator" content="@mayurbhoii" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={CARD_IMAGE_URL} />
          
          {/* Favicons for popular platforms and browsers */}
          <link rel="apple-touch-icon" sizes="57x57" href="/meta/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/meta/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/meta/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/meta/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/meta/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/meta/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/meta/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/meta/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/meta/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/meta/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/meta/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/meta/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/meta/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
