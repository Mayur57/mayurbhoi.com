import {
  Center,
  Grid,
  GridItem,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsTwitter,
  BsMedium,
  BsInstagram,
} from "react-icons/bs";
import NextLink from "next/link";
import { Links } from "../data/links";

const SocialIcon = ({ icons, link, size = 16 }) => (
  <GridItem>
    <NextLink href={link} passHref>
      <Link>
        <Center>
          <Icon
            aria-label="social-icon"
            fontSize={size}
            _hover={{
              transition: "250ms",
              opacity: 0.7,
              transform: "translate(0px, -2px)",
            }}
            bgColor="transparent"
            color={useColorModeValue("#000", "#EEE")}
            opacity={0.5}
            transition="250ms"
          >
            {icons}
          </Icon>
        </Center>
      </Link>
    </NextLink>
  </GridItem>
);

const Social = ({ spacing, size, mt }) => (
  <Center mt={mt}>
    <Grid templateColumns={`repeat(5, ${spacing})`} gap={6}>
      <SocialIcon icons={<BsLinkedin />} link={Links.linkedin} size={size} />
      <SocialIcon icons={<BsGithub />} link={Links.github} size={size} />
      <SocialIcon icons={<BsTwitter />} link={Links.twitter} size={size} />
      <SocialIcon icons={<BsMedium />} link={Links.medium} size={size} />
      <SocialIcon icons={<BsInstagram />} link={Links.instagram} size={size} />
    </Grid>
  </Center>
);

export default Social;
