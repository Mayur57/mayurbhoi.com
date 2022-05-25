/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import { useEffect } from "react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import CookiesProvider from "../libs/cookies";
import * as ga from "../libs/trackers";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const Website = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
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
        <Component {...pageProps} key={router.route} />
      </Layout>
    </CookiesProvider>
  );
};

export default Website;
