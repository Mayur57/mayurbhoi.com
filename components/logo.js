import Link from "next/link";
import Image from "next/image";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Logo = ({ span }) => {
  const logoImg = `/images/logo${useColorModeValue("-light", "-dark")}.svg`;
  return (
    <Link href="/" scroll={false}>
      <a>
        <Box
          paddingTop={1.5}
          height={30}
          mr={6}
          ml={2}
          transition="500ms"
          _hover={{ opacity: 0.5, transition: "500ms ease all" }}
        >
          <Image src={logoImg} width={span} height={span} alt="logo" />
        </Box>
      </a>
    </Link>
  );
};

export default Logo;
