/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Text,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import styled from "styled-components";
import Layout from "../components/layouts/Article";
import { experience } from "../data/experience";
import Section from "../components/Section";
import LinkButton from "../components/LinkButton";
import { Links } from "../data/links";
import Headshot from "../components/Headshot";
import Title from "../components/Title";

const Company = styled.h3`
  & {
    display: inline-block;
    position: relative;
    font-size: 22px;
    letter-spacing: -1.25px;
    font-weight: 700;
    transition: all 0.25s ease-out;
  }

  &:hover {
    color: #0087ca;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    opacity: 0.5;
    border-radius: 25px;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const ExternalLinkData = [
  {
    icon: <FiGithub />,
    title: "GitHub",
    handle: "@mayur57",
    href: Links.github,
  },
  {
    icon: <FiLinkedin />,
    title: "LinkedIn",
    handle: "Mayur Bhoi",
    href: Links.linkedin,
  },
  {
    icon: <FiTwitter />,
    title: "Twitter",
    handle: "@mayurbhoii",
    href: Links.twitter,
  },
];

const ExternalLink = ({ title, href = "#", icon, handle = "@mayur57" }) => (
  <Link href={href} passHref>
    <Box
      display="inline-flex"
      w="100%"
      h="100%"
      border={`1px solid ${useColorModeValue("#00000020", "#FFFFFF20")}`}
      borderRadius="0.5em"
      py="1em"
      px={4}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      transition="all 300ms ease-in-out"
      _hover={{
        backgroundColor: useColorModeValue("#f5f5f5", "#2a2a2a"),
      }}
    >
      <Box display="flex" alignItems="center" gap="0.75em">
        {icon}
        <Box display="flex" flexDir="column">
          <Text>{title}</Text>
          <Text fontSize={10} opacity={0.6} mt={-0.5}>
            {handle}
          </Text>
        </Box>
      </Box>
      <FiArrowUpRight />
    </Box>
  </Link>
);

const About = () => (
  <Layout title="About" section>
    <Container maxW="container.md">
      <Title>about</Title>
      <Box maxWidth="container.md" justifyItems="center">
        <Section delay={0.1}>
          <Box
            maxWidth="container.md"
            py={{ base: "0.2em", sm: "2em" }}
            align="center"
          >
            <Headshot />
          </Box>
        </Section>
        <Section delay={0.2}>
          <p style={{ fontSize: 14 }}>
            <strong>Hello there!</strong>
            <br />
            <br />
            I&apos;m Mayur Bhoi. I&apos;m a designer, software tinkerer, and a{" "}
            <strong>Full Stack Developer</strong> by profession. I have a
            passion for writing intricately designed software that is reliable,
            efficient, and user-friendly.
            <br />
            <br />I have been into writing software for almost five years. I
            started with <strong>App Developement</strong> writing and
            publishing several mobile apps during 2017–2021. Around 2021, I
            started getting into <strong>Server Engineering</strong> while
            designing and maintaining servers for my hobby projects.
            <br />
            <br />
            Currently, I work on end-to-end full stack applications; leverage
            both of my hobbies to design beautiful user interfaces and writing
            robust backend systems. I also actively look for new and exciting
            technologies to explore and learn.
            <br />
            <br />I currently write reliable software at{" "}
            <strong>NCR Corporation</strong> as{" "}
            <strong>Software Engineer I</strong>. I also have quite a few hobby
            projects that you can take a look at{" "}
            <Link className="main-page-url" href="/projects" passHref>
              here
            </Link>
            .
            <br />
          </p>
          <SimpleGrid columns={[1, 1, 3]} gap={4} mt={12}>
            {ExternalLinkData.map(({ title, handle, icon, href }, idx) => (
              <ExternalLink
                key={idx}
                title={title}
                handle={handle}
                icon={icon}
                href={href}
              />
            ))}
          </SimpleGrid>
        </Section>
        <Section delay={0.3} pt="1em">
          <Heading as="h2" fontSize={28} letterSpacing={-1}>
            Experience
          </Heading>
          <Box marginY={2}>
            <p style={{ fontSize: 14 }}>
              These are the places I have worked for in the past recently.
              Checkout my LinkedIn for more.
            </p>
          </Box>
          <SimpleGrid columns={[1, 2, 2]} mb={4}>
            {experience.map((experienceObject, index) => {
              const { company, position, duration, link } = experienceObject;
              return (
                <Section key={index} delay={Math.round((index + 3) / 2) / 10}>
                  <HStack align="center" mt={6}>
                    <Company>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {company}
                      </a>
                    </Company>
                    <FiArrowUpRight opacity={0.9} />
                  </HStack>
                  <Text
                    as="h6"
                    letterSpacing={-0.25}
                    fontWeight="500"
                    opacity={1}
                    fontSize={14}
                    marginTop="0.2em"
                  >
                    {position}
                    <Text
                      letterSpacing={0}
                      fontWeight={400}
                      opacity={0.75}
                      fontSize={12}
                      marginTop={1}
                    >
                      {duration}
                    </Text>
                  </Text>
                </Section>
              );
            })}
          </SimpleGrid>
          <LinkButton link="/resume.pdf" label="Resume" py={12} mb={12} />
        </Section>
      </Box>
    </Container>
  </Layout>
);

export default About;
