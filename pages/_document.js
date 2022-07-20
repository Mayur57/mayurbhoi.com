/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../libs/theme";
import { GTM_ID } from "../libs/trackers";

const TITLE = "Mayur Bhoi";
const DESCRIPTION = "software engineer ✕ product designer";
const CARD_IMAGE_URL = "https://i.ibb.co/2W7M0Td/card.png";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Metadata about the website for SEO */}
          <meta charSet="utf-8" />
          <meta name="description" content={DESCRIPTION} />
          <meta
            name="keywords"
            content="mayur, bhoi, HTML, CSS, JavaScript, Python, Java, C++, portfolio"
          />
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
          <meta name="twitter:image" content="https://i.ibb.co/2W7M0Td/card.png" />

          {/* Favicons for popular platforms and browsers */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/meta/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/meta/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/meta/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/meta/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/meta/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/meta/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/meta/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/meta/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/meta/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/meta/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/meta/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/meta/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/meta/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/meta/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/meta/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
