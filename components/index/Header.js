import { Box, Popover, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import Link from "next/link";
import Section from "../Section";

const Checkmark = () => (
  <Popover isLazy>
    <PopoverTrigger>
    <Box ml={1.5} my={6} h="16px" w="16px">
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified account"
      role="img"
      fill="#1D9BF0"
      data-testid="icon-verified"
    >
      <g>
        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
      </g>
    </svg>
  </Box>
    </PopoverTrigger>
    <PopoverContent p={2} bg='rgba(255,255,255,0.1)' backdropFilter='blur(24px)'>
    <PopoverHeader fontWeight='bold' border='0'>Verified account</PopoverHeader>
    <PopoverBody fontSize={14} pt={0}>This is a legacy verified account. It may or may not be notable. <Link href='https://twitter.com/Reddit/status/1603458895934099456'><span style={{ color: '#1D9BF0', textDecoration: 'underline', cursor: "pointer" }}>Learn more</span></Link></PopoverBody>
  </PopoverContent>
  </Popover>
);

const Header = () => (
  <Section y={10} mb={0} delay={0.1}>
    <Text fontSize="3.5em" fontWeight={500} mt={6} letterSpacing="-0.04em">
      hey
    </Text>
    <Box display="flex" alignItems="center">
      <Text my={6} fontSize='1em' fontWeight={500} letterSpacing="-0.03em">
        mayur bhoi
      </Text>
      <Checkmark />
    </Box>
  </Section>
);

export default Header;

// https://twitter.com/Reddit/status/1603458895934099456