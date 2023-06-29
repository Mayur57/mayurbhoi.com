/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import "@fontsource/space-grotesk";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-wrap-balancer";
import { Toaster } from "sonner";
import { DefaultSeo } from "next-seo";
import Layout from "../components/layouts/Main";
import Fonts from "../components/FontPreLoader";
import { Loading } from "../components/layouts/Loading";
import CookiesProvider from "../libs/cookies";
import "../components/cmdk/cmd.css";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;

const Website = ({ Component, session, pageProps, router }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStartLoading = () => setLoading(true);
    const handleEndLoading = () => setLoading(false);
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleEndLoading);
    router.events.on("routeChangeError", handleEndLoading);
  }, [router.events]);
  return (
    <Provider>
      <SessionProvider session={session}>
        <CookiesProvider cookies={pageProps.cookies}>
          <Fonts />
          <Global styles={GlobalStyles} />
          <Layout router={router}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <Toaster richColors closeButton />
                <DefaultSeo
                  titleTemplate="%s | Mayur Bhoi"
                  defaultTitle="Mayur Bhoi"
                  description="Developer, designer, creator."
                  openGraph={{
                    type: "website",
                    locale: "en_IN",
                    url: "https://www.mayur.wtf/",
                    title: "Mayur Bhoi",
                    description: "Developer, designer, creator.",
                    images: [
                      {
                        url: "https://www.example.ie/og-image-01.jpg",
                        width: 800,
                        height: 600,
                        alt: "Og Image Alt",
                        type: "image/jpeg",
                      },
                      {
                        url: "https://www.example.ie/og-image-02.jpg",
                        width: 900,
                        height: 800,
                        alt: "Og Image Alt Second",
                        type: "image/jpeg",
                      },
                      { url: "https://www.example.ie/og-image-03.jpg" },
                      { url: "https://www.example.ie/og-image-04.jpg" },
                    ],
                  }}
                  twitter={{
                    handle: "@mayurbhoii",
                    cardType: "summary_large_image",
                  }}
                />
                <Component {...pageProps} key={router.route} />
                <Analytics />
              </>
            )}
          </Layout>
        </CookiesProvider>
      </SessionProvider>
    </Provider>
  );
};

export default Website;
