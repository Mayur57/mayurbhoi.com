import { Heading, Text, List, Link, ListItem, useColorModeValue, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BsLinkedin, BsGithub, BsTwitter, BsMedium, BsInstagram } from 'react-icons/bs'
import Obfuscate from 'react-obfuscate'
import Section from '../section'

function SocialLinks({ icon, platform, href = '#', id }) {
  return (
    <ListItem>
      <Flex my={2} alignItems="center">
        {icon}
        <Text
          fontWeight={500}
          fontSize={14}
          letterSpacing="1.2px"
          textTransform="uppercase"
          ml={2}
          opacity={0.8}
          color={useColorModeValue('purple.800', 'teal.200')}
        >
          {platform}
        </Text>
        <NextLink href={href} passHref>
          <Link
            fontSize={14}
            ml={2}
            transition="200ms"
            _hover={{
              transition: '200ms',
              opacity: '0.5',
              textDecoration: 'underline',
              textUnderlineOffset: 2,
            }}
          >
            {id}
          </Link>
        </NextLink>
      </Flex>
    </ListItem>
  )
}

function ContactSection() {
  return (
    <Section delay={0.4}>
      <Heading
        as="h3"
        variant="section-title"
        mt="45px"
        mb="20px"
        textDecorationColor={useColorModeValue('rgba(121, 96, 206, 0.3)', 'rgba(56,178,172, 0.5)')}
      >
        Socials
      </Heading>
      <Text> Consider following me on these platforms:</Text>
      <List ml={8} my={6}>
        <SocialLinks
          icon={<BsLinkedin />}
          platform="linkedin"
          href="https://linkedin.com/in/mayur-bhoi"
          id="Mayur Bhoi"
        />
        <SocialLinks
          icon={<BsInstagram />}
          platform="instagram"
          href="https://instagram.com/mayurbhoii"
          id="@mayurbhoii"
        />
        <SocialLinks
          icon={<BsTwitter />}
          platform="twitter"
          href="https://twitter.com/mayurbhoii"
          id="@mayurbhoii"
        />
        <SocialLinks
          icon={<BsGithub />}
          platform="Github"
          href="https://github.com/mayur57"
          id="@mayur57"
        />
        <SocialLinks
          icon={<BsMedium />}
          platform="medium"
          href="https://mayurbhoi.medium.com/"
          id="Mayur Bhoi"
        />
      </List>
      <Text>
        Want to build something cool or have questions? My inbox is always open! Whether you have a
        question, want to build something together, or just want to say hi, I&apos;ll try my best to
        get back to you!
        <br />
        <br />I check my mailbox regularly, consider dropping a{' '}
        <Link
          transition="200ms"
          _hover={{
            transition: '200ms',
            opacity: '0.5',
            textDecoration: 'underline',
            textUnderlineOffset: 2,
          }}
        >
          <Obfuscate email="mayur072000@gmail.com">mail here</Obfuscate>
        </Link>
        .
      </Text>
    </Section>
  )
}

export default ContactSection
