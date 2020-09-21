import { rem } from "polished"

const theme = {
  navbar: {
    backgroundColor: "#191B1C",
    height: "4rem",
  },
  mediaWidth: "62rem",
  gutters: {
    sidePadding: "2rem",
    smallSidePadding: "1rem",
  },
  breakpoints: {
    xs: rem("249.999999px"),
    sm: rem("449.999999px"),
    md: rem("767.999999px"),
    lg: rem("1169.999999px"),
    xl: rem("1439.999999px"),
  },
  colors: {
    // backgroundPrimary: "#191B1C",
    backgroundPrimary: "#FFF",
    backgroundSecondary: "#2d2d2d",
    // body: "#e8e6e3",
    body: "#555",
    primary: "#4dc1ff",
    secondary: "#ef476f",
    selection: {
      background: "#ffd166",
      text: "#e8e6e3",
    },
  },
  fonts: {
    families: {
      body: "Merriweather",
      logo: "Zilla Slab",
    },
    sizes: {
      base: "18px",
      medium: "14px",
      small: "12px",
    },
  },
}

export default theme
