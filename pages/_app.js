/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import "@fontsource/space-grotesk";
import "@fontsource/newsreader";
import { useEffect, useState } from "react";

import Layout from "../components/layouts/Main";
import Fonts from "../components/FontPreLoader";
import CookiesProvider from "../libs/cookies";
import * as ga from "../libs/trackers";
import { DevelopmentMode } from "../components/DevelopmentMode";
import { Loading } from "../components/layouts/Loading";

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
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    const handleStartLoading = () => setLoading(true);
    const handleEndLoading = () => setLoading(false);
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleEndLoading);
    router.events.on("routeChangeError", handleEndLoading);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <CookiesProvider cookies={pageProps.cookies}>
      <Fonts />
      <Global styles={GlobalStyles} />
      {process.env.NEXT_PUBLIC_PHASE === "dev" ? (
        <DevelopmentMode />
      ) : (
        <Layout router={router}>
          {loading ? (
            <Loading />
          ) : (
            <Component {...pageProps} key={router.route} />
          )}
        </Layout>
      )}
    </CookiesProvider>
  );
};

export default Website;
