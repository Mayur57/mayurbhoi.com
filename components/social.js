import {
  Center,
  Grid,
  GridItem,
  Link,
  IconButton,
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
          <IconButton
            icon={icons}
            size="sm"
            _hover={{
              transition: '500ms',
              opacity: 0.7,
              bgColor: useColorModeValue('rgba(0,0,0,0.05)', 'rgba(256,256,256,0.05)')
            }}
            bgColor="transparent"
            color={useColorModeValue('#000', '#fff')}
            opacity={0.5}
            transition="500ms"
          ></IconButton>
        </Link>
      </NextLink>
    </GridItem>
  )
}

const Social = () => {
  return (
    <Center mt={10}>
      <Grid templateColumns="repeat(5, 30px)" gap={2}>
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
