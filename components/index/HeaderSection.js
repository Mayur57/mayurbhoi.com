/* eslint-disable react/jsx-no-constructed-context-values */
import { CloseIcon } from "@chakra-ui/icons";
import {
  Heading,
  Box,
  Text,
  keyframes,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import "@fontsource/epilogue";
import { MdLocationPin } from "react-icons/md";
import { IconContext } from "react-icons";
import Section from "../Section";
import Social from "../Social";
import LinkButton from "../LinkButton";
import HighlightWidget from "../HighlightWidget";
import Headshot from "../Headshot";
import articles from "../../public/header/articles.webp";
import projects from "../../public/header/projects.webp";

const spin = keyframes`0%, 100% { color: #7ccdea; }
  16%      { color: #0074d9; }
  32%      { color: #2ecc40; }
  48%      { color: #ffdc00; }
  64%      { color: #b10dc9; }
  80%      { color: #ff4136; }`;

function HeaderSection() {
  const animation = `${spin} 4s infinite;`;
  return (
    <>
      <Section delay={0} alignItems="center">
        <VStack
          mt={12}
          align="center"
          spacing={1}
          cursor="default"
          textAlign="center"
        >
          <Box mb={2} ml={{ md: 6 }} align="center">
            <Headshot animate src="/images/me2.png" />
          </Box>
          <Heading
            as="h1"
            variant="page-title"
            fontSize="2.85em"
            letterSpacing="-0.05em"
            pt={4}
          >
            Mayur Bhoi
          </Heading>
          <Text opacity={0.9} marginTop={2}>
            software engineer <CloseIcon fontSize={6} />
            {"  "}product designer
          </Text>
          <HStack align="center" spacing={1.5}>
            <IconContext.Provider
              value={{
                color: useColorModeValue("#9F7AEA", "#FF7B82"),
                size: 18,
              }}
            >
              <div>
                <MdLocationPin />
              </div>
            </IconContext.Provider>
            <Text opacity={0.9} marginTop={2}>
              bengaluru, india
            </Text>
          </HStack>
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

      <Section delay={0.1}>
        <Box mt={10}>
          <LinkButton label="LEARN MORE" link="/about" />
        </Box>
      </Section>

      <Box h="50px" />

      <Section delay={0.2}>
        <HighlightWidget
          title="Projects"
          description="Stuff I have made ranging from mobile apps to fully featured web applications"
          image={projects}
          href="/projects"
        />
      </Section>

      <Section delay={0.3}>
        <HighlightWidget
          title="Articles"
          description="A few words about technical stuff, opinions, and other miscellaneous topics"
          image={articles}
          href="/posts"
        />
      </Section>
    </>
  );
}

export default HeaderSection;
