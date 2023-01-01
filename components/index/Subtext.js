import { Box, Text } from "@chakra-ui/react";

const Subtext = () => (
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
      made using vercel, next.js, and chakraui
    </Text>
  </Box>
);

export default Subtext;
