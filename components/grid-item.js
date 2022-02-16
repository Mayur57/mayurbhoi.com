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
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
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
  <Box w="100%" mt={4} p={4} borderRadius='lg' transition='400ms' _hover={{ transform: 'scale(1.025)', transition: '400ms', boxShadow: 'lg' }}>
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        ></Image>
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
        border-radius: 12px;
      }
    `}
  />
)
