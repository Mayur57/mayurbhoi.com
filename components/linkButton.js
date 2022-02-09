import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const LinkButton = ({ children, link }) => (
        <Box align="center" my={4} mt="30px">
          <NextLink href={ link }>
            <Button
              variant="new-tab-action"
                rightIcon={<ChevronRightIcon /> }
              bgColor={useColorModeValue(
                'rgba(121, 96, 206, 0.3)',
                'rgba(56,178,172, 0.3)'
              )}
              borderColor={useColorModeValue(
                'rgba(121, 96, 206, 0.4)',
                'rgba(56,178,172, 0.4)'
              )}
            >
                { children }
            </Button>
          </NextLink>
        </Box>
)

export default LinkButton

        // <Box align="center" my={4} mt="30px">
        //   <NextLink href="/works">
        //     <Button
        //       variant="new-tab-action"
        //       rightIcon={<ChevronRightIcon />}
        //       bgColor={useColorModeValue(
        //         'rgba(121, 96, 206, 0.3)',
        //         'rgba(56,178,172, 0.3)'
        //       )}
        //       borderColor={useColorModeValue(
        //         'rgba(121, 96, 206, 0.4)',
        //         'rgba(56,178,172, 0.4)'
        //       )}
        //     >
        //       all projects
        //     </Button>
        //   </NextLink>
        // </Box>