/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import CookiesProvider from "../libs/cookies";
import * as ga from "../libs/trackers";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  html {
    scroll-behavior: smooth;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
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
      <Layout router={router}>
        {loading ? (
          <Box
            width="100vw"
            height="100vh"
            backgroundColor="transparent"
            align="center"
          />
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </Layout>
    </CookiesProvider>
  );
};

export default Website;
