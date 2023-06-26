/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";
// import localFont from "next/font/local";
import { Kaisei_Tokumin } from "next/font/google"; 

// const Kaisei = localFont({
//   fontFamily: 'Kaisei Tokumin',
//   src: '../public/fonts/KaiseiTokumin-Bold.ttf',
// });

const bro = Kaisei_Tokumin({
  variable: '--font-local',
  subsets: ['latin'],
  weight: '700',
});

const Title = (props) => (
  <Heading
  as="h1"
  letterSpacing="-0.05em"
  fontSize={[42, 48]}
  color={useColorModeValue("#281D1A", "#EDEDED")}
  mt={{ base: 0, sm: 12 }}
  mb={8}
  {...bro.style}
  {...props}
/>
);

export default Title;
