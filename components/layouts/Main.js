/* eslint-disable import/extensions */
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Main({ children, router }) {
  return (
    <Box transition="all 250ms ease-in-out" bg="#FFFFFF" _dark={{ bg: "#121212" }}>
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
