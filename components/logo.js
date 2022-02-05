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
  line-height: 20px;
  padding: 10px;
  opacity: 1;

  img {
    transition: 300ms ease all;
  }

  &:hover img {
    transform: rotate(90deg);
    opacity: 0.5;
    transition: 300ms ease all;
  }
`

const Logo = () => {
    const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

      return (
        <Link href="/">
          <a>
            <LogoBox>
              <Image src={logoImg} width={20} height={20} alt="logo" />
              <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily='"Inter", sans-serif'
                fontWeight="bold"
                ml={2}
              >
                Mayur Bhoi
              </Text>
            </LogoBox>
          </a>
        </Link>
      )
}

export default Logo

