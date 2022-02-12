import { Heading } from '@chakra-ui/react'

const Title = ({ children }) => (
  <Heading as="h3" fontSize={42} mt={2} mb={8} letterSpacing={-1}>
    {children}
  </Heading>
)

export default Title
