import {
  Center,
  Grid,
  GridItem,
  Link,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsMedium,
  BsInstagram
} from 'react-icons/bs'
import NextLink from 'next/link'

const SocialIcon = ({ icons, link }) => {
  return (
    <GridItem>
      <NextLink href={link} passHref>
        <Link>
          <Center>
            <Icon
              fontSize={22}
              _hover={{
                transition: '500ms',
                opacity: 0.7
              }}
              bgColor="transparent"
              color={useColorModeValue('#000', '#fff')}
              opacity={0.5}
              transition="500ms"
            >
              {icons}
            </Icon>
          </Center>
        </Link>
      </NextLink>
    </GridItem>
  )
}

const Social = () => {
  return (
    <Center mt={10}>
      <Grid templateColumns="repeat(5, 30px)" gap={6}>
        <SocialIcon
          icons={<BsLinkedin />}
          link="https://www.linkedin.com/in/mayur-bhoi/"
        />
        <SocialIcon icons={<BsGithub />} link="https://github.com/Mayur57" />
        <SocialIcon
          icons={<BsTwitter />}
          link="https://twitter.com/mayurbhoii"
        />
        <SocialIcon icons={<BsMedium />} link="https://mayurbhoi.medium.com/" />
        <SocialIcon
          icons={<BsInstagram />}
          link="https://www.instagram.com/mayurbhoii"
        />
      </Grid>
    </Center>
  )
}

export default Social
