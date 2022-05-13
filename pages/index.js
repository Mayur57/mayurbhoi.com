/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  VStack,
  Text,
  useToast,
  HStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import { GridItemStyle } from "../components/grid-item";
import HeaderSection from "../components/index/HeaderSection";

const Page = () => {
  const toast = useToast();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PHASE === "pre-release") {
      toast({
        render: () => (
          <Box
            color="white"
            p={4}
            maxWidth="300px"
            borderRadius={8}
            bg="#ff0000a0"
            filter="auto"
            borderWidth={1}
            borderColor="red.400"
            dropShadow="7px 7px 10px #00000050"
            css={{ backdropFilter: "blur(10px)" }}
          >
            <IconButton
              icon={<CloseButton />}
              pos="absolute"
              right={0}
              top={1.5}
              backgroundColor="transparent"
              p={0}
              maxWidth={2}
              height={6}
              onClick={() => {
                toast.closeAll();
              }}
              _hover={{ backgroundColor: "transparent" }}
            />
            <HStack align="start" pr={4}>
              <InfoIcon mt={1} />
              <VStack spacing={-1} alignItems="left" pl={2}>
                <Text fontSize={13} fontWeight="bold">
                  Pre-release Version
                </Text>
                <Text fontSize={12} pt={2}>
                  The website is still in pre-release phase. Functionality maybe
                  unstable and content may not be final yet.
                </Text>
              </VStack>
            </HStack>
          </Box>
        ),
        duration: 5000,
        position: "top-right",
      });
    }
  }, []);

  return (
    <Container maxW="container.lg">
      <HeaderSection />
      <GridItemStyle />
    </Container>
  );
};

export default Page;
