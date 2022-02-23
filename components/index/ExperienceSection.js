/* eslint-disable react/jsx-key */
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  IconButton,
  Center
} from '@chakra-ui/react'
import Section from '../section'
import LinkButton from '../linkButton'
import { useState } from 'react'
import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { RiFlutterFill } from 'react-icons/ri'
import { FaAws, FaDocker } from 'react-icons/fa'

const ExpButton = ({ children, activeIndex, setIndex }) => {
  return (
    <IconButton
      mx={2}
      transition="100ms"
      onMouseEnter={() => {
        setIndex(activeIndex)
      }}
      onMouseLeave={() => {
        setIndex(0)
      }}
    >
      {children}
    </IconButton>
  )
}

const ExpText = ({ text, activeIndex, testIndex }) => {
  return (
    <Text
      pos="absolute"
      opacity={activeIndex == testIndex ? '0.7' : '0'}
      transition="300ms"
      fontSize={12}
    >
      {text}
    </Text>
  )
}

const ExItem = () => {
  const [index, setIndex] = useState(0)
  return (
    <>
      <Box p={2}>
        <Center>
          <ExpText
            activeIndex={index}
            testIndex={0}
            text="Hover icons for more"
          />
          <ExpText
            activeIndex={index}
            testIndex={1}
            text="Server Engineering and Backend Design Using Node.js"
          />
          <ExpText
            activeIndex={index}
            testIndex={2}
            text="Web Apps Using React and React Native"
          />
          <ExpText
            activeIndex={index}
            testIndex={3}
            text="AWS Platform: EC2, SNS, S3, Lambda and more"
          />
          <ExpText
            activeIndex={index}
            testIndex={4}
            text="Cross Platform Mobile Apps Using Flutter"
          />
          <ExpText
            activeIndex={index}
            testIndex={5}
            text="Docker and CI/CD Workflows"
          />
        </Center>
      </Box>
      <Box mt={4}>
        <ExpButton activeIndex={1} setIndex={setIndex}>
          <IoLogoNodejs />
        </ExpButton>
        <ExpButton activeIndex={2} setIndex={setIndex}>
          <IoLogoReact />
        </ExpButton>
        <ExpButton activeIndex={3} setIndex={setIndex}>
          <FaAws />
        </ExpButton>
        <ExpButton activeIndex={4} setIndex={setIndex}>
          <RiFlutterFill />
        </ExpButton>
        <ExpButton activeIndex={5} setIndex={setIndex}>
          <FaDocker />
        </ExpButton>
      </Box>
    </>
  )
}

export const ExperienceSection = () => {
  return (
    <Section delay={0.3}>
      <Heading
        variant="pronouns"
        textDecor="underline"
        textUnderlineOffset={4}
        textDecorationColor={useColorModeValue(
          'rgba(121, 96, 206, 0.3)',
          'rgba(56,178,172, 0.5)'
        )}
        textAlign="center"
        fontSize={14}
      >
        Skills
      </Heading>
      <Box textAlign="center" mt={4}>
        <ExItem />
      </Box>
      <LinkButton mt={4} link="/about">
        LEARN MORE
      </LinkButton>
    </Section>
  )
}
