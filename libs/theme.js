import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";
import BrandColors from "./ColorHelper";
import "@fontsource/inter";

const { textColorDark, textColorLight } = BrandColors;

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFFFF", "#1D1D1F")(props),
      color: mode(textColorLight, textColorDark)(props),
    },
    h1: {
      fontSize: 42,
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
      letterSpacing: -1,
    },
    h3: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: -0.6,
    },
    code: {
      color: "purple.500",
      fontFamily: "SF Mono",
      fontSize: 12,
    },
    blockquote: {
      fontStyle: "italic",
      fontSize: 26,
      opacity: 0.4,
    },
    li: {
      listStyle: "none",
      fontSize: 12,
      paddingY: 1,
      opacity: 0.6,
      transition: "all 250ms ease",
      _hover: {
        color: "#f00",
      },
    },
  }),
};

const components = {
  Button: {
    variants: {
      "new-tab-action": {
        textTransform: "uppercase",
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: "0.19em",
        borderWidth: 1,
        marginBottom: "none",
        marginTop: "none",
        padding: "0px 30px",
      },
    },
  },
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "none",
        fontSize: 28,
        textDecorationColor: "#525252",
        textDecorationThickness: 2,
        textUnderlineOffset: 5,
        marginTop: 3,
        marginBottom: 2,
        letterSpacing: "-0.05em",
      },
      pronouns: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: "0.19em",
        lineHeight: "25px",
        fontSize: 12,
        textTransform: "uppercase",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("blue.600", "red.300")(props),
      textUnderlinOffset: 3,
    }),
  },
};

const fonts = {
  heading: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  mono: `"SF Mono", monospace`,
};

const colors = {
  glassTeal: "#88CCCA",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
  breakpoints,
});

export default theme;
