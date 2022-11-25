import { extendTheme } from "@chakra-ui/react";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#f0e7db", "#202024")(props),
    },
    "*:focus": {
      outline: "none",
    },
    "button:focus-visible": {
      outline: "none",
      border: 0,
    },
  }),
};

const components = {
  Link: {
    baseStyle: {
      "&:hover": {
        textDecoration: "none",
      },
      "&:focus-visible": {
        boxShadow: "none",
      },
    },
  },
  Button: {
    baseStyle: {
      "&:focus-visible": {
        boxShadow: "none",
      },
    },
  },
};

const fonts = {
  heading: `'Heading Font Name', sans-serif`,
  body: `'Body Font Name', sans-serif`,
};

const configs = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, fonts, configs, components });
export default theme;
