/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import "@fontsource/space-grotesk";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/layouts/Main";
import Fonts from "../components/FontPreLoader";
import CookiesProvider from "../libs/cookies";
import { Loading } from "../components/layouts/Loading";

import "../components/cmdk/cmd.css";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
  }
`;

const Website = ({ Component, pageProps, router }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStartLoading = () => setLoading(true);
    const handleEndLoading = () => setLoading(false);
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleEndLoading);
    router.events.on("routeChangeError", handleEndLoading);
  }, [router.events]);
  return (
    <CookiesProvider cookies={pageProps.cookies}>
      <Fonts />
      <Global styles={GlobalStyles} />
      <Layout router={router}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Component {...pageProps} key={router.route} />
            <Analytics />
          </>
        )}
      </Layout>
    </CookiesProvider>
  );
};

export default Website;
