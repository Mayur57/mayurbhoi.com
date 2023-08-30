/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  useColorModeValue,
  keyframes,
  Text,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

const anim = keyframes`
50% {
  background-position: 140% 50%;
  transform: skew(-2deg);
}`;

const LinkButton = ({ label = "undefined", link, bg, ...props }) => (
  <Box align="center" mt="30px" role="group" {...props}>
    <NextLink href={link} passHref>
      <Button variant="new-tab-action" borderColor="transparent" px={6}>
        <HStack
          opacity={1}
          zIndex={2}
          transition="all 200ms ease"
          _groupHover={{ opacity: 1, transition: "all 200ms ease" }}
        >
          <Text top="0px" left="0px" color={useColorModeValue("#000", "#888")}>
            {label}
          </Text>
          {/* <FiArrowRight /> */}
        </HStack>
        <Box
          pos="absolute"
          bgColor={bg ?? useColorModeValue("#FFFFFF", "#121212")}
          zIndex={1}
          height="100%"
          borderWidth="1px"
          borderColor={useColorModeValue("#000", "#888")}
          width="100%"
          top="0px"
          left="0px"
          display="inline-block"
        />
        <Box
          pos="absolute"
          w="110%"
          h="130%"
          zIndex={0}
          opacity="25%"
          filter="blur(10px) saturate(150%)"
          color="white"
          background="linear-gradient(-90deg, #007CF0, #00DFD8, #FF0080, #007CF0)"
          backgroundSize="400% 100%"
          animation={`${anim} linear 8s infinite`}
          _groupHover={{
            animation: `${anim} linear 4s infinite`,
          }}
        />
      </Button>
    </NextLink>
  </Box>
);

export default LinkButton;
