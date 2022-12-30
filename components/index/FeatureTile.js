/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-useless-fragment */
import { AspectRatio, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Caret from "./Caret";

const FeatureTile = ({
  sectionTitle,
  sectionDescription,
  header,
  itemTitle,
  itemDescription,
  itemLink,
  categoryLink,
  image,
  action,
}) => (
  <Box pt="32px">
    <Text fontSize={24} fontWeight={500} letterSpacing="-0.03em">
      {sectionTitle}
    </Text>
    <Text fontSize={15} fontWeight={400} opacity={0.6}>
      {sectionDescription}
    </Text>
    <Link href={itemLink}>
      <Box
        role="group"
        w="100%"
        mt="1.25em"
        borderWidth={1}
        position="relative"
        borderColor={useColorModeValue("#000", "#888")}
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
          cursor: "pointer",
        }}
      >
        <Caret />
        <Text
          pl="36px"
          pt="36px"
          letterSpacing="0.1em"
          fontSize="11px"
          textTransform="uppercase"
          fontWeight={400}
        >
          {header}
        </Text>
        <Text
          pl="36px"
          pt="24px"
          letterSpacing="-0.03em"
          fontSize={24}
          fontWeight={500}
        >
          {itemTitle}
        </Text>
        <Text
          pl="36px"
          pr="36px"
          pt="8px"
          mb={12}
          opacity={0.7}
          fontSize={14}
          letterSpacing="-0.01em"
          lineHeight={1.5}
          textAlign="justify"
        >
          {itemDescription}
        </Text>
        {image ? (
          <AspectRatio
            position="relative"
            ratio={5 / 3}
            transition="all 250ms ease"
            mb="28px"
            mx="28px"
          >
            <Image priority src={image} layout="fill" />
          </AspectRatio>
        ) : (
          <></>
        )}
      </Box>
    </Link>
    <Link href={categoryLink}>
      <Box
        role="group"
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#888")}
        mb={6}
        borderTop="none"
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
          cursor: "pointer",
        }}
        py="1.25em"
      >
        <Text mr="12px">{action}</Text>
        <Box
          transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
          _groupHover={{ transform: "translateX(8px)" }}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
            alt="arrow"
            style={{ filter: useColorModeValue("invert(0)", "invert(1)") }}
          />
        </Box>
      </Box>
    </Link>
  </Box>
);

export default FeatureTile;
