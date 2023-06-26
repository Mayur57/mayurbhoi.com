/* eslint-disable react/jsx-props-no-spreading */
import { Heading, useColorModeValue } from "@chakra-ui/react";
import localFont from "next/font/local";

const Kaisei = localFont({
  fontFamily: 'Kaisei Tokumin',
  src: '../public/fonts/KaiseiTokumin-Bold.ttf',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

const Title = (props) => (
  <Heading
  as="h1"
  letterSpacing="-0.05em"
  fontSize={[36, 48]}
  color={useColorModeValue("#281D1A", "#EDEDED")}
  mt={{ base: 0, sm: 12 }}
  mb={8}
  {...Kaisei.style}
  {...props}
/>
);

export default Title;
