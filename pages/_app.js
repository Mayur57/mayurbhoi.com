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
import Layout from "../components/layouts/Main";
import Fonts from "../components/FontPreLoader";
import { Loading } from "../components/layouts/Loading";
import CookiesProvider from "../libs/cookies";

import "../components/cmdk/cmd.css";

const GlobalStyles = css`
  @font-face {
    font-family: "Recoleta";
    font-weight: normal;
    src: url(../fonts/Recoleta-Regular.ttf) format("truetype");
  }

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
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
