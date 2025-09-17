// theme and style related constants (colours in separate file)

import { createTheme } from "@mui/material";
import { SITE_TXT_COL, SHINE_DARK_COL } from "./colors";
import { CSSProperties } from "react";

export const SERVICE_CARD_STYLE: CSSProperties = {
  backgroundColor: "transparent",
  width: "100%",
};

export const SERVICE_CARD_CONTENT_STYLE = {
  sm: { padding: "1rem 1rem" },
  md: { padding: "1rem 2rem" },
};

export const H6_STYLE = {
  fontSize: {
    xs: "1rem",
    md: "1.1rem",
    lg: "1.3rem",
  },
};

export const H2_STYLE = {
  fontSize: {
    xs: "2.3rem",
    md: "3.0rem",
    lg: "4.1rem",
  },
};

export const H3_STYLE = {
  fontSize: {
    xs: "1rem",
    md: "1.7rem",
  },
};

export default createTheme({
  palette: {
    text: {
      primary: SITE_TXT_COL,
    },
    secondary: {
      main: "#8e24aa",
    },
  },
  typography: {
    allVariants: {
      background: `linear-gradient(
          120deg,
          ${SITE_TXT_COL} 0%,
          ${SHINE_DARK_COL} 50%,
          ${SITE_TXT_COL} 100%
        )`,
      backgroundSize: "200% auto",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      animation: "shineText 7s ease-in-out infinite",
    },
    h2: {
      fontFamily: "Futura",
      fontSize: "4.5rem",
      textAlign: "left",
    },
    h3: {
      fontFamily: "Futura",
      fontSize: "1.7rem",
      textAlign: "right",
      lineHeight: "1.3",
    },
    h4: {
      fontFamily: "Elemental",
      fontSize: "2rem",
    },
    h5: {
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase",
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
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            ...theme.typography.h6,
            border: "none",
            [theme.breakpoints.up("md")]: {
              fontSize: "1.5rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem",
            },
          }),
        },
      ],
    },
  },
});
