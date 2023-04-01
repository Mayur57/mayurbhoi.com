import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import BrandColors from "./ColorHelper";
import "@fontsource/inter";

const { textColorLight } = BrandColors;

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFFFF", "#111")(props),
      color: mode("#111", "#FFF")(props),
    },
    h1: {
      fontSize: 42,
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
      letterSpacing: -1,
      marginTop: 4,
    },
    h3: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: -0.6,
    },
    h4: {
      fontSize: 18,
      fontWeight: "bold",
      letterSpacing: -0.3,
    },
    ".main-page-url": {
      textDecoration: "underline",
      textDecorationColor: mode(
        "rgba(0, 0, 0, 0.4)",
        "rgba(255, 255, 255, 0.4)"
      )(props),
      textUnderlineOffset: 3,
      transition: "all 250ms ease",
      _hover: {
        textDecoration: "none",
        color: mode("blue.600", "red.300")(props),
      },
    },
    code: {
      color: mode("purple.600", "red.300")(props),
      fontFamily:
        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
      fontSize: 12,
      padding: 1,
      borderRadius: 4,
      backgroundColor: mode("#f2f2f2", "#111")(props),
    },
    pre: {
      color: mode("purple.600", "red.300")(props),
      fontFamily:
        "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
      fontSize: 12,
      wordWrap: "break-word",
      whiteSpace: "pre-wrap",
      borderRadius: 4,
      padding: 2,
      backgroundColor: mode("#f2f2f2", "#111")(props),
    },
    blockquote: {
      fontStyle: "italic",
      fontSize: 26,
      opacity: 0.4,
    },
    p: {
      color: mode(textColorLight, "#E5E5E5")(props),
    },
    strong: {
      color: mode("#121212", "#DDD")(props),
    },
    ".toc-list-item": {
      fontSize: 12,
      paddingY: 1.5,
      opacity: 0.6,
      transition: "all 250ms ease",
      _hover: {
        opacity: 1,
      },
    },
    ".article-link": {
      color: mode("purple.400", "red.300")(props),
      transition: "all 250ms ease",
      _hover: {
        opacity: 0.6,
      },
    },
    ".article": {
      whiteSpace: "pre-wrap",
      color: mode(textColorLight, "#E5E5E5")(props),
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
  heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif`,
  mono: `'Space Grotesk', SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono,monospace`,
};

const colors = {
  glassTeal: "#88CCCA",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
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
