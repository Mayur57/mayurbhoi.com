import { CloseIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Image,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../section";
import Social from "../social";

const spin = keyframes`0%, 100% { color: #7ccdea; }
  16%      { color: #0074d9; }
  32%      { color: #2ecc40; }
  48%      { color: #ffdc00; }
  64%      { color: #b10dc9; }
  80%      { color: #ff4136; }`;

function HeaderSection() {
  const animation = `${spin} 4s infinite;`;
  return (
    <Section delay={0.1}>
      <Box
        display={{ md: "flex" }}
        alignItems="center"
        padding="55px 0px 0px 0px"
      >
        <Box flexGrow={1}>
          <Heading
            as="h1"
            variant="page-title"
            fontSize={52}
            letterSpacing="-0.05em"
          >
            Mayur Bhoi
          </Heading>
          <p style={{ opacity: 0.8, marginTop: 2 }}>
            software engineer <CloseIcon fontSize={6} />
            {"  "}product designer
          </p>
          <Box>
            <Heading
              as="h2"
              variant="pronouns"
              opacity={0.9}
              color={useColorModeValue("purple.600", "#FF7B82")}
              _hover={{ animation }}
            >
              he/him/his
            </Heading>
          </Box>
          <Box mt={3} ml={1}>
            <Social spacing="10px" size={20} />
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            w="auto"
            h="auto"
            borderColor={useColorModeValue("white", "#FEF6E5")}
            backgroundColor={useColorModeValue("purple.100", "red.200")}
            borderWidth={6}
            borderStyle="solid"
            maxWidth="160px"
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
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("rgba(121, 96, 206, 0.3)", "#FEF6E511")}
        fontSize={16}
        p={3}
        mb={6}
        mt={8}
        align="center"
        text-align="justify"
        text-justify="auto"
      >
        Writing efficient and pragmatic software.
      </Box>
    </Section>
  );
}

export default HeaderSection;
