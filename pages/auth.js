import { Box, Text, Heading, Input, Button } from "@chakra-ui/react";

const Auth = () => (
  <Box
    flex={1}
    width="100%"
    backgroundColor="transparent"
    align="center"
    py="30vh"
  >
    <Heading fontSize={28}>could not recognize you.</Heading>
    <Text pb={4} fontSize={14}>
      restricted space. authorization required.
    </Text>
    <Box maxWidth={{ base: "75%", md: "35%", lg: "30%" }}>
      <Input
        variant="filled"
        placeholder="username"
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
      />
      <Input borderRadius={0} placeholder="password" variant="filled" />
      <Button
        width="100%"
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        fontWeight="medium"
        textTransform="uppercase"
        fontSize={12}
        letterSpacing="1.2px"
        color="blue.400"
      >
        Login
      </Button>
    </Box>
  </Box>
);
export default Auth;
