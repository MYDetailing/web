// theme and style related constants (colours in separate file)

import { createTheme } from "@mui/material";
import { SITE_TXT_COL, SHINE_DARK_COL } from "./colors";
import { CSSProperties } from "react";

export const SIDE_MARGIN = "7%";
export const TOP_MARGIN = {
  xs: "15vh",
  sm: "10vh",
};
export const SECTION_PADDING = "2rem";

export const SERVICE_CARD_STYLE: CSSProperties = {
  backgroundColor: "transparent",
  width: "100%",
};

export const SERVICE_CARD_CONTENT_STYLE = {
  sm: { padding: "1rem 1rem" },
  md: { padding: "1rem 2rem" },
};

const baseTheme = createTheme();

export default createTheme({
  palette: {
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
    h1: {
      fontFamily: "FuturaBold",
      textAlign: "left",
      [baseTheme.breakpoints.between("xs", "sm")]: {
        fontSize: "2.3rem",
      },
      [baseTheme.breakpoints.between("sm", "md")]: {
        fontSize: "2.6rem",
      },
      [baseTheme.breakpoints.between("md", "lg")]: {
        fontSize: "3.0rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "4.1rem",
      },
    },
    h1_sm: {
      fontFamily: "FuturaBold",
      textAlign: "left",
      [baseTheme.breakpoints.between("xs", "sm")]: {
        fontSize: "2.3rem",
      },
      [baseTheme.breakpoints.between("sm", "md")]: {
        fontSize: "2.6rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.7rem",
      },
    },
    h2: {
      fontFamily: "Futura",
      textAlign: "left",
      [baseTheme.breakpoints.between("xs", "sm")]: {
        fontSize: "2.3rem",
      },
      [baseTheme.breakpoints.between("sm", "md")]: {
        fontSize: "2.6rem",
      },
      [baseTheme.breakpoints.between("md", "lg")]: {
        fontSize: "3.0rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "4.1rem",
      },
    },
    h2_sm: {
      fontFamily: "Futura",
      textAlign: "left",
      [baseTheme.breakpoints.between("xs", "sm")]: {
        fontSize: "2.3rem",
      },
      [baseTheme.breakpoints.between("sm", "md")]: {
        fontSize: "2.6rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.7rem",
      },
    },
    h3: {
      fontFamily: "Futura",
      fontSize: "1.7rem",
      textAlign: "right",
      lineHeight: "1.3",
      [baseTheme.breakpoints.between("xs", "md")]: {
        fontSize: "1rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontFamily: "Elemental",
      fontSize: "2rem",
      textAlign: "center",
      padding: "0 .5rem",
      [baseTheme.breakpoints.between("xs", "md")]: {
        fontSize: "1.7rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    h5: {
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase",
      [baseTheme.breakpoints.between("xs", "md")]: {
        fontSize: "1rem",
      },
      [baseTheme.breakpoints.between("md", "lg")]: {
        fontSize: "1.1rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "1.3em",
      },
    },
    h6_sm: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase",
      fontSize: "1rem"
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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1_sm: React.CSSProperties;
    h2_sm: React.CSSProperties;
    h6_sm: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1_sm?: React.CSSProperties;
    h2_sm?: React.CSSProperties;
    h6_sm?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1_sm: true;
    h2_sm: true;
    h6_sm: true;
  }
}
