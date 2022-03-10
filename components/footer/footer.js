import React from 'react'
import { Box, Center, Divider, useColorModeValue } from '@chakra-ui/react'
import Obfuscate from 'react-obfuscate'
import { Container, Row, Column, FooterLink, Heading } from './footer-styles'
import Logo from '../logo'
import Social from '../social'

function Footer() {
  return (
    <Box mt={10}>
      <Box mb={10}>
        <Divider />
      </Box>
      <Container>
        <Row>
          <Column>
            <Logo />
          </Column>
          <Column>
            <Heading style={{ color: useColorModeValue('#000', '#fff') }}>General</Heading>
            <FooterLink href="/about" style={{ color: useColorModeValue('#000', '#fff') }}>
              About
            </FooterLink>
            <FooterLink href="/projects" style={{ color: useColorModeValue('#000', '#fff') }}>
              Projects
            </FooterLink>
            <FooterLink href="/posts" style={{ color: useColorModeValue('#000', '#fff') }}>
              Blog
            </FooterLink>
            <FooterLink style={{ color: useColorModeValue('#000', '#fff') }}>
              <Obfuscate email="mayur072000@gmail.com">Mail</Obfuscate>
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{ color: useColorModeValue('#000', '#fff') }}>Specifics</Heading>
            <FooterLink
              href="/resume/resume.pdf"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Resume
            </FooterLink>
            {/* <FooterLink
              href="/certificates"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Certificates
            </FooterLink> */}
            <FooterLink
              href="https://github.com/Mayur57/portfolio-v2"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Source
            </FooterLink>
            <FooterLink href="/meta" style={{ color: useColorModeValue('#000', '#fff') }}>
              About Website
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Center mt={10}>
        <Social size={22} spacing="30px" />
      </Center>
      <Box
        align="center"
        justifyContent="center"
        opacity={0.4}
        fontSize="0.55rem"
        fontWeight={600}
        paddingTop="30px"
        letterSpacing={1.2}
      >
        {'</>'} WITH ❤️ BY MAYUR BHOI
        <br />
        &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED
      </Box>
    </Box>
  )
}
export default Footer
