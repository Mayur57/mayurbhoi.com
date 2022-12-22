import {
  AspectRatio,
  Box,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import dynamic from "next/dynamic";
import Image from "next/image";
import { GridItemStyle } from "../components/grid/GridItemStyle";

// const DynamicHeaderComponent = dynamic(() =>
//   import("../components/index/HeaderSection").then((module) => module.default)
// );

const Page = () => (
  <Container maxW="container.sm" alignContent="center" marginBottom={28}>
    {/* <DynamicHeaderComponent /> */}
    <Box height="13vh" />
    <Box
      height="1.25em"
      width="1.25em"
      bgColor={useColorModeValue("#FF5C00", "#FFB346")}
      borderRadius="50%"
    />
    <Text fontSize="48px" fontWeight={500} mt={6} letterSpacing="-0.04em">
      hey
    </Text>
    <Text my={6} fontSize="18px" fontWeight={600} letterSpacing="-0.03em">
      mayur bhoi
    </Text>
    <Text
      mb={6}
      fontSize={16}
      letterSpacing="-0.01em"
      lineHeight={1.5}
      textAlign="justify"
    >
      creating impactful & elegant software. full stack engineer. unsatisfiably
      curious about design and systems. trying to make a difference with code.
      relentlessly devoted to intricacy, efficiency, and detailed polish. always
      seeking out the cutting edge in my craft. currently at <a href="#">NCR</a>
      .
    </Text>
    <Text mb={6}>based in bangalore, india</Text>
    <Box py="12px">
      <Box
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#e5e5e5")}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#e5e5e5"),
          cursor: "pointer",
        }}
      >
        <Text
          pl="36px"
          pt="36px"
          letterSpacing="0.1em"
          fontSize="11px"
          textTransform="uppercase"
          fontWeight={400}
        >
          Featured
        </Text>
        <Text
          pl="36px"
          pt="24px"
          letterSpacing="-0.03em"
          fontSize={24}
          fontWeight={500}
        >
          This is a project
        </Text>
        <Text
          pl="36px"
          pr="36px"
          pt="8px"
          mb={12}
          fontSize={14}
          letterSpacing="-0.01em"
          lineHeight={1.5}
          textAlign="justify"
        >
          creating impactful & elegant software. full stack engineer.
          unsatisfiably curious about design and systems. trying to make a
          difference with code. relentlessly devoted to intricacy, efficiency,
          and detailed polish. always seeking out the cutting edge in my craft.
          currently at.
        </Text>
        <AspectRatio
          position="relative"
          ratio={5 / 3}
          transition="all 250ms ease"
          mb="28px"
          mx="28px"
          _groupHover={{
            transition: "all 250ms ease",
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
        >
          <Image src="https://i.ibb.co/q7Xpnjd/covid-bot.png" layout="fill" />
        </AspectRatio>
      </Box>
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#e5e5e5")}
        mb={6}
        borderTop="none"
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#e5e5e5"),
          cursor: "pointer",
        }}
        align="center"
        py="1.25em"
      >
        <Text mr="12px">See all projects</Text>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
          alt=""
          className="css-148l5n8"
        />
      </Box>
    </Box>
    <Box py="12px">
      <Box
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#e5e5e5")}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#e5e5e5"),
          cursor: "pointer",
        }}
      >
        <Text
          pl="36px"
          pt="36px"
          letterSpacing="0.1em"
          fontSize="11px"
          textTransform="uppercase"
          fontWeight={400}
        >
          Latest
        </Text>
        <Text
          pl="36px"
          pt="24px"
          letterSpacing="-0.03em"
          fontSize={24}
          fontWeight={500}
        >
          This is an article man
        </Text>
        <Text
          pl="36px"
          pr="36px"
          pt="8px"
          mb={12}
          fontSize={14}
          letterSpacing="-0.01em"
          lineHeight={1.5}
          textAlign="justify"
        >
          creating impactful & elegant software. full stack engineer.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#e5e5e5")}
        mb={6}
        borderTop="none"
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#e5e5e5"),
          cursor: "pointer",
        }}
        align="center"
        py="1.25em"
      >
        <Text mr="12px">Read all articles</Text>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
          alt=""
          className="css-148l5n8"
        />
      </Box>
    </Box>
    <Box display="flex" dir="row" alignItems="center" opacity={0.4}>
      <svg
        width="20px"
        height="20px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        color="currentColor"
      >
        <path
          d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Text ml="8px">powered by vercel, next, and chakraui.</Text>
      {/* <Text my={8} css={{ writingMode: 'vertical-lr' }}>powered by vercel, next, and chakraui.</Text> */}
    </Box>
    <GridItemStyle />
  </Container>
);

export default Page;
