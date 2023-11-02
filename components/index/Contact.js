import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import ContactBox from "./ContactBox";
import ResumeBox from "./ResumeBox";

const Contact = () => (
  <>
    <Text pt="32px" fontSize={24} fontWeight={500} letterSpacing="-0.03em">
      Say hi
    </Text>
    <Box
      role="group"
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      w="100%"
      borderColor={useColorModeValue("#000", "#888")}
      transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
      mt={4}
    >
      <ContactBox
        top
        field="Email"
        value="mayur072000@gmail.com"
        link="mailto:mayur072000@gmail.com"
      />
      <ResumeBox />
    </Box>
    <Box
      role="group"
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      w="100%"
      borderColor={useColorModeValue("#000", "#888")}
      transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
      mb={48}
    >
      <ContactBox
        field="Github"
        value="mayur57"
        link={process.env.NEXT_PUBLIC_GITHUB}
      />
      <ContactBox
        field="LinkedIn"
        value="Mayur Bhoi"
        link={process.env.NEXT_PUBLIC_LINKEDIN}
      />
      <ContactBox
        last
        field="Twitter"
        value="mayurbhoii"
        link={process.env.NEXT_PUBLIC_TWITTER}
      />
    </Box>
  </>
);

export default Contact;
