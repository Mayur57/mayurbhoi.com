import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  opacity: 1;
  transition: 500ms ease all;

  img {
    transition: 500ms ease all;
  }

  &:hover {
    opacity: 0.5;
    transition: 500ms ease all;
  }

  &:hover img {
    transform: rotate(90deg);
    transition: 500ms ease all;
  }
`

const Logo = () => {
    const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

      return (
        <Link href="/">
          <a>
            <LogoBox>
              <Image src={logoImg} width={25} height={25} alt="logo" />
              <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.700')}
                fontFamily='"Inter", sans-serif'
                fontWeight="500"
                fontStyle="normal"
                letterSpacing="0.19em"
                lineHeight="25px"
                fontSize={13}
                textTransform="uppercase"
                ml={3}
              >
                Mayur Bhoi
              </Text>
            </LogoBox>
          </a>
        </Link>
      )
}

export default Logo

