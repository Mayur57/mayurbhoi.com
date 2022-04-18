/* eslint-disable react-hooks/exhaustive-deps */
import { Container, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { GridItemStyle } from "../components/grid-item";
import HeaderSection from "../components/index/HeaderSection";
import AboutParaSection from "../components/index/AboutParaSection";
import { ExperienceSection } from "../components/index/ExperienceSection";
import FeaturedProjectSection from "../components/index/FeaturedProjectsSection";
import ContactSection from "../components/index/ContactSection";

const Page = () => {
  const toast = useToast();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PHASE === "pre-release") {
      toast({
        title: "Pre-release Website",
        description:
          "The website is still in pre-release phase. Functionality maybe unstable and content may not be final yet.",
        status: "error",
        duration: 9000,
        variant: "left-accent",
        isClosable: true,
      });
    }
  }, []);

  return (
    <Container>
      <HeaderSection />
      <AboutParaSection />
      <GridItemStyle />
      <ExperienceSection />
      <FeaturedProjectSection />
      <ContactSection />
    </Container>
  );
};

export default Page;
