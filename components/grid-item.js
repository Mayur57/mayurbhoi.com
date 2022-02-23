/* eslint-disable react-hooks/rules-of-hooks */
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  Link,
  LinkOverlay,
  Grid,
  GridItem,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const GridItemCustom = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="100%"
    borderRadius="lg"
    transition="250ms ease-in-out"
    _hover={{
      transform: 'scale(1.025)',
      transition: '250ms ease-in-out',
      boxShadow: 'lg'
    }}
  >
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="project-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text fontWeight="600" fontSize="20" mt={1.5} lineHeight={1.2} mx={2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize="12" opacity={0.7} mt={1.5} mx={2} pb={4}>
          {children}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const ProjectsGridItemIndex = ({
  id,
  title,
  desc,
  thumbnail,
  sourcelink,
  bloglink
}) => (
  <Box
    w="100%"
    mt={4}
    p={4}
    borderRadius="xl"
    transition="250ms ease-in-out"
    _hover={{
      transform: 'scale(1.025)',
      transition: '250ms ease-in-out',
      boxShadow: 'lg'
    }}
  >
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="project-item-thumbnail"
          placeholder="blur"
        />
        <Text fontWeight="600" fontSize="20" mt={1}>
          {title}
        </Text>
        <Text fontSize="14" opacity={0.7}>
          {desc}
        </Text>
      </LinkBox>
    </NextLink>
    <Grid templateColumns="repeat(2, 80px)" gap={4} mt={2}>
      <GridItem fontSize={12} letterSpacing="1.2px">
        {sourcelink == null ? (
          <></>
        ) : (
          <NextLink href={sourcelink} passHref>
            <Link
              color={useColorModeValue('purple.500', 'teal.200')}
              transitionDuration="500ms"
              textDecoration="none"
              _hover={{
                color: useColorModeValue('purple.100', 'teal.100'),
                transitionDuration: '500ms',
                textDecoration: 'underline',
                textUnderlineOffset: 3
              }}
            >
              <ChevronRightIcon mr={1} mb={0.5} />
              SOURCE
            </Link>
          </NextLink>
        )}
      </GridItem>
      <GridItem fontSize={12} letterSpacing="1.2px">
        {bloglink == null ? (
          <></>
        ) : (
          <NextLink href={bloglink} passHref>
            <Link
              color={useColorModeValue('purple.500', 'teal.200')}
              textDecoration="none"
              _hover={{
                color: useColorModeValue('purple.100', 'teal.100'),
                transitionDuration: '500ms',
                textDecoration: 'underline',
                textUnderlineOffset: 3
              }}
            >
              <ChevronRightIcon mr={1} mb={0.5} />
              BLOG
            </Link>
          </NextLink>
        )}
      </GridItem>
    </Grid>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      
      .project-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
