import { Heading, Box, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../section'
import Social from '../social'

const HeaderSection = () => {
  return (
    <Section delay={0.1}>
      <Box
        display={{ md: 'flex' }}
        alignItems="center"
        padding="55px 0px 0px 0px"
      >
        <Box flexGrow={1}>
          <Heading
            as="h2"
            variant="page-title"
            fontSize={52}
            letterSpacing="-0.05em"
          >
            Mayur Bhoi
          </Heading>
          <p style={{ opacity: 0.8, marginTop: 2 }}>
            software developer + product designer
          </p>
          <Heading
            as="h6"
            variant="pronouns"
            opacity={0.9}
            color={useColorModeValue('purple.600', 'teal.200')}
          >
            he/him/his
          </Heading>
          <Box mt={3} ml={1}>
            <Social spacing="10px" size={20} />
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            backgroundColor={useColorModeValue('purple.100', 'teal.100')}
            borderWidth={4}
            borderStyle="solid"
            maxWidth="160px"
            display="inline-block"
            borderRadius="100px"
            src="/images/me.png"
            alt="Profile Picture"
            boxShadow="lg"
            transition="250ms"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: 'xl',
              transition: '250ms',
              borderColor: useColorModeValue('purple.300', 'teal.400')
            }}
          />
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        // TODO: See if this is good
        bg={useColorModeValue(
          'rgba(121, 96, 206, 0.3)',
          'rgba(56,178,172, 0.3)'
        )}
        fontSize={16}
        p={3}
        mb={6}
        mt={8}
        align="center"
        // fontWeight="bolder"
        // color={useColorModeValue(
        //   'purple.400',
        //   'teal.300'
        // )}
        // opacity={0.7}
        text-align="justify"
        text-justify="auto"
      >
        Writing efficient and pragmatic software.
      </Box>
    </Section>
  )
}

export default HeaderSection
