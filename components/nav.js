/* eslint-disable react/jsx-props-no-spreading */
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuDivider,
  Center,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FiArrowUpRight } from 'react-icons/fi'
import Logo from './logo'
import ThemeButton from './theme-button'

function LinkItem({ href, path, children }) {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const activeBackgroundColor = useColorModeValue(
    'rgba(121, 96, 206, 0.3)',
    'rgba(56,178,172, 0.3)'
  )
  return (
    <NextLink href={href}>
      <Link
        py={2}
        px={4}
        bg={active ? activeBackgroundColor : undefined}
        color={inactiveColor}
        textUnderlineOffset={5}
        fontSize={14}
        borderRadius="8"
        _hover={{
          transform: 'scale(1.1)',
          opacity: useColorModeValue(0.6, 1),
          color: useColorModeValue('purple', 'teal.300'),
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

function Navbar(props) {
  const { path } = props
  const sourceLink = 'https://github.com/Mayur57/portfolio-v2'
  const resumeLink = 'resume/resume.pdf'
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      pl={4}
      bg={useColorModeValue('#ffffff40', '#20202020')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <Link
            _target="_blank"
            href={resumeLink}
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
            fontSize={14}
            px={4}
            textUnderlineOffset={5}
            transition="250ms ease-in-out"
            _hover={{
              transform: 'scale(1.1)',
              opacity: useColorModeValue(0.6, 1),
              color: useColorModeValue('purple', 'teal.200'),
              transition: '250ms ease-in-out',
            }}
            color={useColorModeValue('gray200', 'whiteAlpha.900')}
          >
            Resume
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                transition="all 0.2s"
                _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem>Articles</MenuItem>
                </NextLink>
                <MenuDivider />
                <NextLink href={sourceLink} passHref>
                  <MenuItem>
                    Source&nbsp;&nbsp;
                    <FiArrowUpRight size={14} opacity={0.4} />
                  </MenuItem>
                </NextLink>
                <NextLink href={resumeLink} passHref>
                  <MenuItem>
                    <Center>
                      Resume&nbsp;&nbsp;
                      <FiArrowUpRight size={14} opacity={0.4} />
                    </Center>
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
