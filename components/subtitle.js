import { Text, useColorModeValue } from '@chakra-ui/react'

const Subtitle = ({ children }) => (
  <Text
    fontSize={14}
    mt={12}
    letterSpacing={1.4}
    fontWeight="bold"
    color={useColorModeValue('#805AD5', '#ED64A6')}
    textTransform="uppercase"
  >
    {children}
  </Text>
)

export default Subtitle
