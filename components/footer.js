import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="0.55rem"
          fontWeight={600}
          paddingTop="50px"
      letterSpacing={1.2}
    >
      v1.82 | UPDATED FEB 2022
      <br />
      &copy; {new Date().getFullYear()} MAYUR BHOI | ALL RIGHTS RESERVED
    </Box>
  )
}

export default Footer
