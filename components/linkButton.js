import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const LinkButton = ({ children, link }) => (
  <Box align="center" my={4} mt="30px">
    <NextLink href={link}>
      <Button
        variant="new-tab-action"
        rightIcon={<ChevronRightIcon />}
        _hover={{
          bgColor: useColorModeValue(
            'rgba(121, 96, 206, 0.5)',
            'rgba(56,178,172, 0.5)'
          ),
          transform: 'scale(1.05)',
          boxShadow: 'lg'
        }}
        bgColor={useColorModeValue(
          'rgba(121, 96, 206, 0.3)',
          'rgba(56,178,172, 0.3)'
        )}
        borderColor={useColorModeValue(
          'rgba(121, 96, 206, 0.4)',
          'rgba(56,178,172, 0.4)'
        )}
      >
        {children}
      </Button>
    </NextLink>
  </Box>
)

export default LinkButton