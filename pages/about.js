import {
  Box,
  Text,
  Container,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import { experience } from "../data/experience";
import Section from "../components/section";
import LinkButton from "../components/linkButton";
import { Links } from "../data/links";

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

const About = () => (
  <Layout title="About">
    <Container maxW="container.md">
      <Subtitle>About</Subtitle>
      <Title>Experience &amp; Background</Title>
      <Box maxWidth="container.md" justifyItems="center">
        <Section delay={0.1}>
          <p>
            Hello there!
            <br />
            I’m Mayur Bhoi. I’m a designer and software tinkerer. I have a passion for writing intricately designed software that is reliable, efficient, and user-friendly.
            <br />
            I have been into development for almost 5 years. I started out as an App Developer to write and publish several mobile apps, circa 2017. Simultaneously, I also pursued Graphic Design as a hobby. A couple of years later, I pivoted into Server Engineering designing and writing servers for my hobby projects.
            <br />
            Currently, I work on end-to-end full stack applications; leveraging both of my hobbies to design beautiful user interfaces, as well as, write robust backend systems. I also actively look for new and exciting technologies to explore and learn; presently, learning the AWS Platform and Next.js.
            <br />
            I currently write reliable software at NCR Corporation as **Software Engineer I** for the Digital Banking unit. I also have quite a few hobby projects that you can take a look at *here*.
            <br />
            I am an open source advocate and actively try to contribute to the open source community. OSS FTW!
          </p>
        </Section>
        {/* <Section delay={0.2}>
          <Heading as="h2" fontSize={28} letterSpacing={-1}>
            Technical Skillset
          </Heading>
          <Box marginY={2}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Box>
        </Section> */}
        <Section delay={0.3}>
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
                      <Link href={link}>{company}</Link>
                    </Company>
                    <FiArrowUpRight opacity={0.9} />
                  </HStack>
                  <Text
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
          <LinkButton link={Links.resume} label="Resume" />
        </Section>
      </Box>
    </Container>
  </Layout>
);

export default About;
