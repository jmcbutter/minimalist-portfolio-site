import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Ibarra Real Nova, serif`,
    body: `Public Sans, sans`,
  },
  colors: {
    'bright-red': "#F43030",
    'light-gray': "#EAEAEB",
    'very-light-gray': "#FAFAFA",
    'grayish-dark-blue': "#33323D",
    'dark-blue': "#203A4C",
    'slightly-desaturated-cyan': "#5FB4A2",
  },
  components: {
    Button: {
      baseStyle: {
        'WebkitTapHighlightColor': 'transparent',
      }
    }
  }
});

export default theme;
