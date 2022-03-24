import {
  Box,
  Text,
  Container,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styled from 'styled-components'
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import Paragraph from "../components/paragraph";
import { experience } from "../data/experience";
import Section from "../components/section";

const Company = styled.h3`
  & {
    display: inline-block;
    position: relative;
    font-size: 22px;
    letter-spacing: -1.25px;
    font-weight: 700;
    transition: all 0.35s ease-out;
  }

  &:hover {
    color: #0087ca;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2.5px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    opacity: 0.5;
    border-radius: 25px;
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const About = () => (
  <Layout title="About">
    <Container>
      <Subtitle>About</Subtitle>
      <Title>Experience &amp; Background</Title>
      <Section delay={0.1}>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          <br />
          <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h2" fontSize={28} letterSpacing={-1}>
          Work
        </Heading>
        <Box marginY={2}>
          <Paragraph>
            These are the places I have worked for in the past recently.
            Checkout my LinkedIn for more.
          </Paragraph>
        </Box>
        {experience.map((experienceObject, index) => {
          const { company, position, duration, link } =
            experienceObject;
          return (
            <Section delay={0.2 + index / 10}>
              <HStack align="center" mt={6}>
                <Company>
                  <Link href={link}>{company}</Link>
                </Company>
                <FiArrowUpRight opacity={0.7} />
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
      </Section>
    </Container>
  </Layout>
);

export default About;
