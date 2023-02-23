import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { MenuProvider } from "kmenu";

import theme from "./theme";
import Palette from "../components/cmdk/Command";

const darkThemeConfigs = {
  backdropColor: "#00000099",
  backgroundColor: "#171717",
  backdropBlur: 4,
  borderWidth: 1,
  borderColor: "#333333",
  inputBorder: "#333333",
  inputColor: "#ffffff",
  barBackground: "#FFFFFF10",
  headingColor: "#696969",
  breadcrumbColor: "#ffffff",
};

export default function CookiesProvider({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider resetCSS theme={theme} colorModeManager={colorModeManager}>
      <MenuProvider
        config={darkThemeConfigs}
        dimensions={{ commandHeight: 50, sectionHeight: 40 }}
      >
        <Palette />
        {children}
      </MenuProvider>
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
