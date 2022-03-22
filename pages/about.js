import {
  Box,
  Text,
  Container,
  Heading,
  chakra,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import Paragraph from "../components/paragraph";

const experience = [
  {
    company: "Authenticating.com",
    position: "Software Engineering Intern",
    duration: "Feb 2022 - Present",
    experiencePoints: [
      "This is line one. This is line one. This is line one. This is line one. This is line one. This is line one. This is line one. This is line one. This is line one. This is line one.",
      "This is line two.",
      "This is line three.",
      "This is line four.",
      "This is line five.",
    ],
  },
  {
    company: "Sigma Tenant",
    position: "Software Engineering Intern",
    duration: "April 2021 - June 2021",
    experiencePoints: [
      "Compatibility and stability testing of Flutter based app with the native iOS platform using Swift",
      "Developed industry standard unit tests for the app and deployed it to the iOS App Store",
    ],
  },
  {
    company: "Mobbypark Inc.",
    position: "Flutter  Development Intern",
    duration: "December 2020 - January 2021",
    experiencePoints: [
      "Two seperate Flutter applications, involving communication with company servers using RESTful requests including authentication of users using custom API.",
      "Developed a QR based logging system for users to easily scan and generate QR codes.",
      "Redesigned the apps for a better, easier-to-use and beautiful user interface, using Sketch.",
    ],
  },
  {
    company: "The MIT Post",
    position: "Lead Developer - App Platform",
    duration: "August 2019 - May 2021",
    experiencePoints: [
      "Maintained existing Kotlin based app and built the complete app from ground up using Flutter to replace the older version",
      "Displays blogs from the website using HTML parsing and hosts PDF notices using the Firebase storage",
      "Uses Puppeteer API and node.js for web scraping to log into the official student portal using headless browser automation",
      "Push Notifications and real time event updates handling using GMS and custom API respectively",
    ],
  },
];

const About = () => (
  <Layout title="About">
    <Container>
      <Subtitle>About</Subtitle>
      <Title>Experience &amp; Background</Title>
      <Heading as="h2" fontSize={28} letterSpacing={-1}>
        Work
      </Heading>
      <Box marginY={2}>
        <Paragraph>
          These are the places I have worked for in the past recently. Checkout
          my LinkedIn for more.
        </Paragraph>
      </Box>
      {experience.map((experienceObject) => {
        const { company, position, duration, experiencePoints } =
          experienceObject;
        return (
          <>
            <Heading
              as="h3"
              fontSize={26}
              letterSpacing={-1.25}
              fontWeight={700}
              marginTop={6}
            >
              {company}
            </Heading>
            <Text
              letterSpacing={-0.25}
              fontWeight="bold"
              opacity={1}
              fontSize={16}
              marginTop={1}
              marginY={2}
            >
              {position} •{" "}
              <chakra.span
                letterSpacing={-0.25}
                fontWeight={600}
                opacity={0.75}
                fontSize={14}
                marginTop={1}
                marginY={2}
              >
                {duration}
              </chakra.span>
            </Text>
            <UnorderedList>
              {experiencePoints.map((value, index) => (
                <ListItem
                  key={index}
                  marginY={1}
                  fontSize={14}
                  letterSpacing={-0.55}
                >
                  {value}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        );
      })}
    </Container>
  </Layout>
);

export default About;
