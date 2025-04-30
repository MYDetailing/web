import { createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#8e24aa"
    },
  },
  typography: {
    allVariants: {
      background: `linear-gradient(
          120deg,
        #ffffff 0%,
        #aaaaaa 50%,
        #ffffff 100%
        )`,
      backgroundSize: "200% auto",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      animation: "shineText 7s ease-in-out infinite",
    },
    h4: {
      fontFamily: "Elemental",
      fontSize: "2rem"
    },
    h5: {
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase"
    },
    subtitle1: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase",
      fontSize: "1.1rem",
      lineHeight: "1.3",
    },
    subtitle2: {
      fontSize: "1.2rem",
    },
    body1: {
      fontStyle: "italic",
      fontSize: "1.2rem",
      textAlign: "start",
    },

  },
});

export default theme;