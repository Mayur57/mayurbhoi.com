/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Text,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { getCMSBaseUrl } from "../libs/functions";
import Section from "../components/Section";
import FeatureTile from "../components/index/FeatureTile";
import ContactBox from "../components/index/ContactBox";
import Subtext from "../components/index/Subtext";

const anim = keyframes`
50% {
  background-position: 140% 50%;
  transform: skew(-2deg);
}`;

const Page = ({ post, project }) => (
  <Container maxW="container.sm" alignContent="center">
    <Box height="15vh" />
    <Section y={0} mb={0}>
      <Box
        height="1.25em"
        width="1.25em"
        bgColor={useColorModeValue("#FF5C00", "#FFB346")}
        borderRadius="50%"
      />
    </Section>
    <Section y={2} mb={0} delay={0.1}>
      <Text fontSize="48px" fontWeight={500} mt={6} letterSpacing="-0.04em">
        hey
      </Text>
      <Text my={6} fontSize="18px" fontWeight={600} letterSpacing="-0.03em">
        mayur bhoi
      </Text>
    </Section>
    <Section y={2} delay={0.2} mb={0}>
      <Text
        mb={6}
        fontSize={16}
        letterSpacing="-0.01em"
        lineHeight={1.5}
        textAlign="justify"
      >
        creating impactful & elegant software. full stack engineer.
        unsatisfiably curious about design and high performance systems. trying
        to make a difference with code. relentlessly devoted to intricacy,
        efficiency, and detailed polish. always seeking out the cutting edge in
        my craft. currently at{" "}
        <Link href="https://ncr.com">
          <a className="main-page-url">NCR</a>
        </Link>
        .
      </Text>
      <Text mb={6}>based in bengaluru, india</Text>
    </Section>

    <Section y={2} delay={0.3} mb={0}>
      <Link href="/about">
        <Box
          role="group"
          display="flex"
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          w="100%"
          borderWidth={1}
          borderColor={useColorModeValue("#000", "#888")}
          transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
          _hover={{
            backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
            cursor: "pointer",
          }}
          py="1em"
          mt={12}
        >
          <Text mr="12px">more</Text>
          <Box
            transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
            _groupHover={{ transform: "translateX(8px)" }}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
              alt="arrow"
              style={{ filter: useColorModeValue("invert(0)", "invert(1)") }}
            />
          </Box>
        </Box>
      </Link>
    </Section>

    <Box
      transform="rotate(90deg)"
      my={24}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjcyMDggMUwzNiA5TTM2IDlMMjguNzIwOCAxN00zNiA5SDAiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
        alt="arrow"
        style={{ filter: useColorModeValue("invert(0.6)", "invert(0.4)") }}
      />
    </Box>

    <FeatureTile
      sectionTitle="Projects"
      sectionDescription="I make things."
      header="Featured"
      itemTitle={project?.title}
      itemDescription={project?.description}
      itemLink={`/projects/${project?.slug}`}
      categoryLink="/projects"
      action="see all projects"
      image={project?.thumbnail}
    />

    <FeatureTile
      sectionTitle="Articles"
      sectionDescription="I write things."
      header="Latest"
      itemTitle={post?.title}
      itemDescription={post?.description}
      action="read all articles"
      itemLink={`/posts/${post?.slug}`}
      categoryLink="/posts"
    />

    <Box pt="32px">
      <Text fontSize={24} fontWeight={500} letterSpacing="-0.03em">
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
        <Link href={process.env.NEXT_PUBLIC_RESUME}>
          <Box
            pos="relative"
            flex={1}
            overflow="hidden"
            borderWidth={1}
            height={{ base: "3.71em", sm: "4.1em" }}
            borderColor={useColorModeValue("#000", "#888")}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Box
              background="linear-gradient(-45deg, #007CF0, #00DFD8, #FF0080, #007CF0)"
              backgroundSize="400% 400%"
              filter="blur(40px) saturate(150%)"
              opacity="15%"
              h="100%"
              w="100%"
              animation={`${anim} linear 12s infinite`}
              transition="all 1s cubic-bezier(.08,.52,.52,1)"
              _hover={{
                opacity: "50%",
                animation: `${anim} linear 6s infinite`,
              }}
            />
            <Box position="absolute" left="12px" top="12px">
              <Text
                letterSpacing="0.1em"
                fontSize={{ base: "0.6em", sm: "0.65em" }}
                textTransform="uppercase"
                fontWeight={400}
              >
                Resume
              </Text>
              <Text
                letterSpacing="-0.03em"
                fontSize={{ base: "0.8em", sm: "1em" }}
                fontWeight={500}
              >
                Mayur Bhoi
              </Text>
            </Box>
          </Box>
        </Link>
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
    </Box>

    <Subtext>made using vercel, next.js, and chakraui</Subtext>
  </Container>
);

export default Page;

async function getFeaturedProject() {
  const response = await fetch(
    `${getCMSBaseUrl()}/projects?filters[featured][$eq]=true`
  ).then((res) => res.json());
  const { data } = response;
  return data[0];
}

async function getLatestPost() {
  const response = await fetch(
    `${getCMSBaseUrl()}/posts?sort[0]=uploaded:desc&pagination[pageSize]=1`
  ).then((res) => res.json());
  const { data } = response;
  return data[0];
}

export const getStaticProps = async () => {
  const post = await getLatestPost();
  const project = await getFeaturedProject();
  return post
    ? {
        props: { post: post.attributes, project: project.attributes },
      }
    : {
        props: {
          post: [],
          project: [],
          error: "Error retrieving articles. Server returned invalid response.",
        },
      };
};
