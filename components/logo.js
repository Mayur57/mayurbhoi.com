import Link from "next/link";
import Image from "next/image";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Logo = ({ span }) => {
  const logoImg = `/images/logo${useColorModeValue("-light", "-dark")}.svg`;
  return (
    <Link href="/" scroll={false}>
      <a>
        <Box
          position="relative"
          height={span}
          width={span}
          mr={6}
          mt={1.5}
          transition="250ms ease all"
          _hover={{ opacity: 0.3, transition: "250ms ease all" }}
          cursor="pointer"
          filter="grayscale(1)"
        >
          <Image src={logoImg} layout="fill" alt="logo" />
        </Box>
      </a>
    </Link>
  );
};

export default Logo;
