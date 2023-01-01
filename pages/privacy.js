/* eslint-disable react/no-unescaped-entities */
import { Container, Text } from "@chakra-ui/react";
import Layout from "../components/layouts/Article";
import Subtitle from "../components/Subtitle";

const Heading = ({ children }) => (
  <Text fontSize={18} fontWeight={600} letterSpacing="-0.03em" mt="1.5em">
    {children}
  </Text>
);

const About = () => (
  <Layout title="About Website">
    <Container maxW="container.md">
      <Subtitle>countless</Subtitle>
      <Text as="h1" fontSize={38} letterSpacing="-0.05em" fontWeight={600}>
        Privacy Policy
      </Text>
      <Text fontSize={13} fontWeight={500} opacity={0.6} mb={6}>
        Effective as of 24 December 2022
      </Text>
      <Text>
        This privacy policy applies to the countless extension (the
        "Extension"). The Extension is provided by Mayur Bhoi and is intended
        for use as is. By using the Extension, you consent to the collection,
        use, and sharing of your information as described in this privacy
        policy.
      </Text>

      <Heading>What information is collected by the Extension?</Heading>
      <Text>
        The Extension does not collect any personal information about you or the
        tweets you view while the Extension is enabled.
      </Text>
      <Heading>How is the collected information used?</Heading>
      <Text mb="8em">
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
        <Heading>Contact Us</Heading>
        If you have any questions about this privacy policy, please reach out at{" "}
        <a href="mailto:mayur072000@gmail.com">mayur072000@gmail.com</a>.
      </Text>
    </Container>
  </Layout>
);

export default About;
