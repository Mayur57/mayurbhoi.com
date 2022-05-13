import { CloseIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Text,
  Image,
  keyframes,
  useColorModeValue,
  VStack,
  Stack,
} from "@chakra-ui/react";
import Section from "../section";
import Social from "../social";
import LinkButton from "../linkButton";

const spin = keyframes`0%, 100% { color: #7ccdea; }
  16%      { color: #0074d9; }
  32%      { color: #2ecc40; }
  48%      { color: #ffdc00; }
  64%      { color: #b10dc9; }
  80%      { color: #ff4136; }`;

function HighlightWidget({
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

function HeaderSection() {
  const animation = `${spin} 4s infinite;`;
  return (
    <>
      <Section delay={0.1}>
        <VStack mt={12} align="center" spacing={1} cursor="default">
          <Box mt={{ base: 4, md: 0 }} mb={4} ml={{ md: 6 }} align="center">
            <Image
              w="auto"
              h="auto"
              borderColor={useColorModeValue("white", "#FEF6E5")}
              backgroundColor={useColorModeValue("purple.100", "red.200")}
              borderWidth={6}
              borderStyle="solid"
              maxWidth="180px"
              display="inline-block"
              borderRadius="100px"
              src="/images/me.webp"
              alt="Profile Picture"
              boxShadow="lg"
              transition="all 250ms"
              placeholder="blur"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
                transition: "250ms",
                borderColor: useColorModeValue("purple.300", "red.400"),
              }}
            />
          </Box>
          <Heading
            as="h1"
            variant="page-title"
            fontSize={46}
            letterSpacing="-0.05em"
          >
            Mayur Bhoi
          </Heading>
          <Text opacity={0.9} marginTop={2}>
            software engineer <CloseIcon fontSize={6} />
            {"  "}product designer
          </Text>
          <Heading
            variant="pronouns"
            opacity={0.9}
            color={useColorModeValue("purple.600", "#FF7B82")}
            _hover={{ animation }}
            mb={10}
          >
            he/him/his
          </Heading>
          <Box>
            <Social spacing="20px" size={20} mt={6} mb={6} />
          </Box>
        </VStack>
      </Section>

      <Section delay={0.3}>
        <Box mt={10}>
          <LinkButton link="/about">LEARN MORE</LinkButton>
        </Box>
      </Section>

      <HighlightWidget
        title="Projects"
        description="Projects I have made lmao"
      />

      <HighlightWidget
        title="Projects"
        description="Projects I have made lmao"
      />

      <HighlightWidget
        title="Projects"
        description="Projects I have made lmao"
      />
    </>
  );
}

export default HeaderSection;
