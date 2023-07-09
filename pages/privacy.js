/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Article";
import Title from "../components/Title";

const Heading = ({ children }) => (
  <Text fontSize={15} fontWeight={600} letterSpacing="-0.03em" mt="1.5em">
    {children}
  </Text>
);

const About = () => (
  <Layout title="Privacy" section>
    <Container maxW="container.md">
      <Title>Privacy Policy</Title>
      <Text fontSize={18} fontWeight="medium" mt={8}>
        The Website
      </Text>
      <Text fontSize={13} fontWeight={500} opacity={0.6} mb={4}>
        Effective as of 3 February 2022
      </Text>
      <Box fontSize={14} color={useColorModeValue("#222", "#B5B5B5")} mb={4}>
        This website does not collect any personal information about you. The
        website is hosted on Vercel. Vercel Analytics is enabled on this website
        which is used to collect anonymous information about the visitors to the
        website.
      </Box>
      <Divider mb={6} />
      <Text fontSize={18} fontWeight="medium">
        Countless (Chrome Extension)
      </Text>
      <Text fontSize={13} fontWeight={500} opacity={0.6} mb={4}>
        Effective as of 24 December 2022
      </Text>
      <Box fontSize={14} color={useColorModeValue("#222", "#B5B5B5")} mb={12}>
        This privacy policy applies to the countless extension (the
        "Extension"). The Extension is provided by Mayur Bhoi and is intended
        for use as is. By using the Extension, you consent to the collection,
        use, and sharing of your information as described in this privacy
        policy.
        <Heading>What information is collected by the Extension?</Heading>
        The Extension does not collect any personal information about you or the
        tweets you view while the Extension is enabled.
        <Heading>How is the collected information used?</Heading>
        As the Extension does not collect any information, there is no
        information to use.
        <Heading>
          Is the collected information shared with third parties?
        </Heading>
        As the Extension does not collect any information, there is no
        information to share with third parties.
        <Heading>How is the collected information stored?</Heading>
        As the Extension does not collect any information, there is no
        information to store.
        <Heading>Your Choices</Heading>
        You can choose to disable the Extension at any time by accessing the
        Extension settings in your Chrome browser and turning it off.
        <Heading>Changes to this Privacy Policy</Heading>
        We may update this privacy policy from time to time. We encourage you to
        review the privacy policy whenever you access the Extension to stay
        informed about our information practices and the choices available to
        you.
        <Heading>Contact Me</Heading>
        If you have any questions about this privacy policy, please reach out at{" "}
        <a href="mailto:mayur072000@gmail.com">mayur072000@gmail.com</a>.
      </Box>
    </Container>
  </Layout>
);

export default About;
