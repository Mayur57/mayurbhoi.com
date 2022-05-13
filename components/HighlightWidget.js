import { Stack, Image, VStack, Text } from "@chakra-ui/react";

export default function HighlightWidget({
  title,
  description,
  image = "/images/projects/covid.jpg",
}) {
  return (
    <Stack
      role="group"
      spacing={{ base: "25px", sm: "25px", md: "100px" }}
      direction={{ base: "column", sm: "column", md: "row" }}
      alignItems={{ md: "center" }}
      paddingY={{ base: 8, md: 12 }}
      transition="all 200ms ease"
      cursor="pointer"
    >
      <Image
        src={image}
        width={{ sm: "100%", md: 400 }}
        placeholder="blur"
        transition="all 200ms ease"
        boxShadow="0 19px 60px -10px rgb(0 0 0 / 30%), 0 18px 36px -18px rgb(0 0 0 / 33%)"
        _groupHover={{ transform: "scale(1.0125)" }}
      />
      <VStack
        alignItems="flex-start"
        transition="all 200ms ease"
        _groupHover={{ color: "coral" }}
      >
        <Text fontSize={24} fontWeight="bold">
          {title}
        </Text>
        <Text opacity={0.7}>{description}</Text>
      </VStack>
    </Stack>
  );
}
