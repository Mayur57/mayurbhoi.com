import React from 'react'
import { Container, Row, Column, FooterLink, Heading } from './footer-styles'
import Logo from './logo'
import Social from './social'
import { Box, Divider, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const email = 'mayur072000@gmail.com'
  const subject = 'Hello There!'
  const body = '<- Your message here ->'
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
            <Heading style={{ color: useColorModeValue('#000', '#fff') }}>
              General
            </Heading>
            <FooterLink
              href="/about"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              About
            </FooterLink>
            <FooterLink
              href="/projects"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Projects
            </FooterLink>
            <FooterLink
              href="/posts"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Blog
            </FooterLink>
            <FooterLink
              href={`mailto:${email}?${subject}&${body}`}
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Mail
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{ color: useColorModeValue('#000', '#fff') }}>
              Specifics
            </Heading>
            <FooterLink
              href="#"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Resume
            </FooterLink>
            <FooterLink
              href="#"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Certificates
            </FooterLink>
            <FooterLink
              href="#"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Source
            </FooterLink>
            <FooterLink
              href="#"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              About Website
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Social />
      <Box
        align="center"
        justifyContent="center"
        opacity={0.4}
        fontSize="0.55rem"
        fontWeight={600}
        paddingTop="30px"
        letterSpacing={1.2}
      >
        WRITTEN WITH ❤️ BY MAYUR BHOI
        <br />
        &copy; {new Date().getFullYear()} | ALL RIGHTS RESERVED
      </Box>
    </Box>
  )
}
export default Footer
