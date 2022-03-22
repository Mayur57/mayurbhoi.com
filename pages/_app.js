/* eslint-disable react/jsx-props-no-spreading */
import { Global, css } from "@emotion/react";
import Layout from "../components/layouts/main";
import "focus-visible/dist/focus-visible";
import "@fontsource/inter";
import Fonts from "../components/fonts";
import CookiesProvider from "../libs/cookies";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  p {
    font-size: 16px;
  }
`;

const Website = ({ Component, pageProps, router }) => (
  <CookiesProvider cookies={pageProps.cookies}>
    <Fonts />
    <Global styles={GlobalStyles} />
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </CookiesProvider>
);

export default Website;
