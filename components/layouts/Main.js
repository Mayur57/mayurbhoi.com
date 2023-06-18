/* eslint-disable import/extensions */
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import { ScrollToTopEmoji } from "../ScrollToTop";

function Main({ children, router }) {
  return (
    <Box
      width="100%"
      transition="all 250ms ease-in-out"
      _dark={{ bg: "#121212" }}
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
        <ScrollToTopEmoji />
      </Container>
      {/* {router.asPath !== "/" && <Footer />} */}
    </Box>
  );
}

export default Main;
