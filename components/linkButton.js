import {
  Box,
  Button,
  useColorModeValue,
  keyframes,
  Text,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";

const anim = keyframes`
50% {
  background-position: 140% 50%;
  transform: skew(-2deg);
}`;

const LinkButton = ({ label = "undefined", link }) => (
  <Box align="center" mt="30px" role="group">
    <NextLink href={link} passHref>
      <Button
        variant="new-tab-action"
        borderColor="transparent"
        px={2}
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <HStack
          opacity={0.5}
          zIndex={2}
          transition="all 200ms ease"
          _groupHover={{ opacity: 1, transition: "all 200ms ease" }}
        >
          <Text top="0px" left="0px">
            {label}
          </Text>
          <FiArrowRight />
        </HStack>
        <Box
          pos="absolute"
          bgColor={useColorModeValue("#FFFFFF", "#1D1D1F")}
          zIndex={1}
          height="100%"
          width="100%"
          top="0px"
          left="0px"
          display="inline-block"
          borderRadius={4}
        />
        <Box
          pos="absolute"
          w="120%"
          h="125%"
          zIndex={0}
          opacity="30%"
          filter="blur(10px) saturate(100%)"
          color="white"
          background="linear-gradient(-90deg, #007CF0, #00DFD8, #FF0080, #007CF0)"
          backgroundSize="400% 100%"
          animation={`${anim} linear 12s infinite`}
          _groupHover={{
            animation: `${anim} linear 4s infinite`,
          }}
        />
      </Button>
    </NextLink>
  </Box>
);

export default LinkButton;
