/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @next/next/no-img-element */
import {
  AspectRatio,
  Box,
  Container,
  Text,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { getCMSBaseUrl } from "../libs/functions";
import Section from "../components/Section";

const anim = keyframes`
50% {
  background-position: 140% 50%;
  transform: skew(-2deg);
}`;

const ContactBox = ({ field, value, last, top, link }) => (
  <Link href={link} passHref>
    <Box
      flex={1}
      borderWidth={1}
      borderTop={top ? "solid 1px" : "none"}
      borderRight={last ? "solid 1px" : "none"}
      py="12px"
      px="12px"
      transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
      borderColor={useColorModeValue("#000", "#888")}
      _hover={{
        backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
        cursor: "pointer",
      }}
    >
      <Text
        letterSpacing="0.1em"
        fontSize={{ base: "0.6em", sm: "0.65em" }}
        textTransform="uppercase"
        fontWeight={400}
      >
        {field}
      </Text>
      <Text
        letterSpacing="-0.03em"
        fontSize={{ base: "0.8em", sm: "1em" }}
        fontWeight={500}
      >
        {value}
      </Text>
    </Box>
  </Link>
);

const Subtext = ({ children }) => (
  <Box
    display="flex"
    dir="row"
    justifyContent="center"
    alignItems="center"
    opacity={0.6}
    transform="scale(0.8)"
    pointerEvents="none"
    userSelect="none"
  >
    <svg
      width="20px"
      height="20px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
    >
      <path
        d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <Text fontSize="0.85em" ml="8px">
      {children}
    </Text>
  </Box>
);

const Caret = () => (
  <Box
    position="absolute"
    top="32px"
    right="32px"
    transition="all 400ms cubic-bezier(.25, 1, 1, 1)"
    _groupHover={{ right: "24px" }}
  >
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwxMCAxMEwxIDE5IiBzdHJva2U9ImJsYWNrIi8+Cjwvc3ZnPgo="
      alt="arrow"
      style={{ filter: useColorModeValue("invert(0)", "invert(1)") }}
    />
  </Box>
);

const FeatureTile = ({
  sectionTitle,
  sectionDescription,
  header,
  itemTitle,
  itemDescription,
  itemLink,
  categoryLink,
  image,
  action,
}) => (
  <Box pt="32px">
    <Text fontSize={24} fontWeight={500} letterSpacing="-0.03em">
      {sectionTitle}
    </Text>
    <Text fontSize={15} fontWeight={400} opacity={0.6}>
      {sectionDescription}
    </Text>
    <Link href={itemLink}>
      <Box
        role="group"
        w="100%"
        mt="1.25em"
        borderWidth={1}
        position="relative"
        borderColor={useColorModeValue("#000", "#888")}
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
          cursor: "pointer",
        }}
      >
        <Caret />
        <Text
          pl="36px"
          pt="36px"
          letterSpacing="0.1em"
          fontSize="11px"
          textTransform="uppercase"
          fontWeight={400}
        >
          {header}
        </Text>
        <Text
          pl="36px"
          pt="24px"
          letterSpacing="-0.03em"
          fontSize={24}
          fontWeight={500}
        >
          {itemTitle}
        </Text>
        <Text
          pl="36px"
          pr="36px"
          pt="8px"
          mb={12}
          opacity={0.7}
          fontSize={14}
          letterSpacing="-0.01em"
          lineHeight={1.5}
          textAlign="justify"
        >
          {itemDescription}
        </Text>
        {image ? (
          <AspectRatio
            position="relative"
            ratio={5 / 3}
            transition="all 250ms ease"
            mb="28px"
            mx="28px"
          >
            <Image priority src={image} layout="fill" />
          </AspectRatio>
        ) : (
          <></>
        )}
      </Box>
    </Link>
    <Link href={categoryLink}>
      <Box
        role="group"
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        w="100%"
        borderWidth={1}
        borderColor={useColorModeValue("#000", "#888")}
        mb={6}
        borderTop="none"
        transition="all 0.8s cubic-bezier(.08,.52,.52,1)"
        _hover={{
          backgroundColor: useColorModeValue("#eee", "#1a1a1a"),
          cursor: "pointer",
        }}
        py="1.25em"
      >
        <Text mr="12px">{action}</Text>
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
  </Box>
);

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
      {/* <LinkButton label="About" link="#" pt={8} width='100%' /> */}
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
            <Box position="absolute" left="7.5rem" top="1.5rem">
              <Text
                letterSpacing="0.1em"
                fontSize="0.75em"
                textTransform="uppercase"
                fontWeight={400}
              >
                Resume
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
