/* eslint-disable import/extensions */
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../nav.js";
import Footer from "../footer/footer.js";

function Main({ children, router }) {
  return (
    <Box transition="all 150ms ease-in-out" bg="#FFFFFF" _dark={{ bg: "#000" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mayur Bhoi | Software Developer</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Main;
