import { extendTheme } from "@chakra-ui/react";

const colors = {
  dark: {
    "100": "#212529FC",
    "75": "#212529BF",
    "50": "#21252980",
    "25": "#21252940",
  },
  white: {
    "100": "#FFFFFFFC",
    "75": "#FFFFFFBF",
    "50": "#FFFFFF80",
    "25": "#FFFFFF40",
  },
  green: {
    "100": "#74C69D",
    "75": "#74C69DBF",
    "50": "#74C69D80",
    "25": "#74C69D40",
  },
  background: "#F5F5F5",
};

const fonts = {
  heading: "Crimson Text",
  body: "Work Sans",
};

const fontSizes = {
  xs: "0.9375rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "1.75rem",
  "2xl": "2rem",
  "3xl": "2.5rem",
};

const fontWeights = {
  regular: 400,
  bold: 700,
};

const lineHeights = {
  normal: "normal",
  shorter: 1.25,
};

const letterSpacings = {
  normal: "0",
  wide: "0.3125rem",
};

const breakpoints = {
  sm: "35.5rem",
  md: "48rem",
  lg: "64rem",
  xl: "75rem",
  "2xl": "80rem",
  "3xl": "85rem",
};

const sizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "35.5rem",
  md: "48rem",
  lg: "64rem",
  xl: "73.75rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  sizes,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  styles: {
    global: {
      body: {
        bg: "background",
        color: "dark.100",
      },
    },
  },
});
