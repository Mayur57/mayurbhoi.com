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
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { experience } from "../data/experience";
import Section from "../components/Section";
import LinkButton from "../components/LinkButton";
import { Links } from "../data/links";
import Headshot from "../components/Headshot";
import profile from "../public/images/me.png";

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
        backgroundColor: useColorModeValue("#f5f5f5", "#2a2a2a")
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
  <Layout title="About">
    <Container maxW="container.md">
      <Subtitle>About</Subtitle>
      <Title>Experience &amp; Background</Title>
      <Box maxWidth="container.md" justifyItems="center">
        <Section delay={0.1}>
          <Box maxWidth="container.md" py="3em" align="center">
            <Headshot src={profile} />
          </Box>
        </Section>
        <Section delay={0.2}>
          <p>
            <strong>Hello there!</strong>
            <br />
            <br />
            I&apos;m Mayur Bhoi. I&apos;m a designer, software tinkerer, and a{" "}
            <strong>Full Stack Developer</strong> by profession. I have a
            passion for writing intricately designed software that is reliable,
            efficient, and user-friendly. You willl generally find me busy
            building my projects, cooking food, and making coffee.
            <br />
            <br />I have been into writing software for almost 5 years. I
            started out as an <strong>App Developer</strong> writing and
            publishing several mobile apps around 2017. Simultaneously, I also
            pursued <strong>Graphic Design</strong> as a hobby. A couple of
            years later, I pivoted into <strong>Server Engineering</strong> to
            design, write and maintain servers for my hobby projects and more.
            <br />
            <br />
            Currently, I work on end-to-end full stack applications; leveraging
            both of my hobbies to design beautiful user interfaces, as well as,
            write robust backend systems. I also actively look for new and
            exciting technologies to explore and learn; presently, learning the{" "}
            <em>AWS Platform and Next.js</em>.
            <br />
            <br />I currently write reliable software at{" "}
            <strong>NCR Corporation</strong> as{" "}
            <strong>Software Engineer I</strong> for the Digital Banking Unit. I
            also have quite a few hobby projects that you can take a look at{" "}
            <Link href="/projects" passHref>
              here
            </Link>
            .
            <br />
            <br />I am an open source advocate and actively try to contribute to
            the open source community.
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
            <p>
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
                    fontWeight="600"
                    opacity={1}
                    fontSize={16}
                    marginTop={1}
                  >
                    {position}
                    <Text
                      letterSpacing={-0.25}
                      fontWeight={600}
                      opacity={0.75}
                      fontSize={14}
                      marginTop={1}
                    >
                      {duration}
                    </Text>
                  </Text>
                </Section>
              );
            })}
          </SimpleGrid>
          <LinkButton link={Links.resume} label="Resume" py={12} />
        </Section>
      </Box>
    </Container>
  </Layout>
);

export default About;
