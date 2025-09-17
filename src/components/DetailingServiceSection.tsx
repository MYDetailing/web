// detailing card on the home page

import { CSSProperties } from "react";
import { Stack, Typography } from "@mui/material";

import { DETAILINGBG_JPG } from "../constants/resourceLocations";
import { VIDEO_OVERLAY_COL } from "../constants/colors";
import { H2_STYLE, H6_STYLE } from "../constants/styles";

import { DETAILING_TITLE, DETAILING_DESCRIPTION, DETAILING_BTN_TXT } from "../constants/strings";

import MyButton from "./MyButton";

const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const imgStyle: CSSProperties = {
  position: "absolute",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  objectPosition: "0 -55px",
};

const darkOverlay: CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: VIDEO_OVERLAY_COL,
  display: "flex",
  alignItems: "center",
};

const stackStyle = {
  padding: {
    xs: "2rem",
    md: "3rem",
  },
  height: "100%",
  boxSizing: "border-box",
  alignItems: "stretch",
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

const headingStyle = {
  ...H2_STYLE,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};

const titleStyle: CSSProperties = {
  margin: "auto",
};

const descriptionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function DetailingServiceSection() {
  return (
    <div style={containerStyle}>
      <img src={DETAILINGBG_JPG} style={imgStyle} />
      <div style={darkOverlay}>
        <Stack sx={stackStyle} spacing={4} direction={"row"}>
          <div style={titleStyle}>
            <Typography variant="h2" sx={{ ...headingStyle }}>
              {DETAILING_TITLE[0]}
            </Typography>
            <Typography variant="h2" sx={{ ...headingStyle, fontFamily: "FuturaBold" }}>
              {DETAILING_TITLE[1]}
            </Typography>
          </div>
          <div style={descriptionStyle}>
            <Typography variant="h6" sx={H6_STYLE}>
              {DETAILING_DESCRIPTION}
            </Typography>
            <MyButton buttonText={DETAILING_BTN_TXT} />
          </div>
        </Stack>
      </div>
    </div>
  );
}
