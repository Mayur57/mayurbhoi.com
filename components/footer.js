// import { Box } from '@chakra-ui/react'
// import styled from 'styled-components'

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   margin-left: 60px;
// `

// const Row = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
//   grid-gap: 20px;

//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   }
// `

// const Footer = () => {
//   return (
//     <Box
//       align="center"
//       opacity={0.4}
//       fontSize="0.55rem"
//       fontWeight={600}
//       paddingTop="50px"
//       position="absolute"
//       bottom={0}
//       width="100%"
//       letterSpacing={1.2}
//     >
//       v1.82 | UPDATED FEB 2022
//       <br />
//       &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED
//     </Box>
//   )
// }

// export default Footer

// <--------------------------->

import React from 'react'
import {
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from './stylesFooter'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={20}>
      <Container>
        <Row>
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
              href="mailto:mayur072000@gmail.com"
              style={{ color: useColorModeValue('#000', '#fff') }}
            >
              Mail
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{color: useColorModeValue("#000","#fff")}}>Specifics</Heading>
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
      <Box
        align="center"
        opacity={0.4}
        fontSize="0.55rem"
        fontWeight={600}
        paddingTop="30px"
        letterSpacing={1.2}
      >
        MADE WITH ❤️ BY MAYUR BHOI
        <br />
        &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED
      </Box>
    </Box>
  )
}
export default Footer