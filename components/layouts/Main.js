/* eslint-disable import/extensions */
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Main({ children, router }) {
  return (
    <Box
      transition="all 250ms ease-in-out"
      _dark={{ bg: "#121212" }}
      _after={router.asPath === "/" && {
        background: `conic-gradient(
          from 180deg at 50% 50%,
          #16abff33 0deg,
          #0885ff33 55deg,
          #54d6ff33 120deg,
          #0071ff33 160deg,
          transparent 360deg
        )`,
        top: '50px',
        width: "340px",
        height: "280px",
        zIndex: -1,
        content: '""',
        left: {base: "-10%", md: "20%"},
        position: "absolute",
        filter: "blur(45px)",
        transform: "translateZ(0)",
      }}
      _before={router.asPath === "/" && {
        background: `linear-gradient(
          to bottom right,
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0),
          rgba(1, 65, 255, 0.3)
        )`,
        borderRadius: "50%",
        width: "480px",
        height: "360px",
        content: "''",
        left: {base: "-15%", md: "20%"},
        position: "absolute",
        transform: "translateZ(0) rotate(78deg)",
        filter: "blur(45px)"
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mayur Bhoi</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container
        maxW="container.xl"
        pt={14}
        position="relative"
        minHeight="100vh"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Main;
