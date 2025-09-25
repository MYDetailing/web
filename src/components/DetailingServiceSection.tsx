// detailing card on the home page

import { CSSProperties } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { DETAILINGBG_JPG, ROUTES } from "../constants/resourceLocations";
import { VIDEO_OVERLAY_COL } from "../constants/colors";
import { H2_STYLE, H6_STYLE } from "../constants/styles";

import { DETAILING_TITLE, DETAILING_DESCRIPTION, DETAILING_BTN_TXT } from "../constants/strings";

import MyButton from "./MyButton";

const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const imgStyle = {
  position: "absolute",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  objectPosition: {
    xs: "-100px",
    sm: "0px",
    lg: "0px -55px",
  },
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
    xs: "1rem",
    md: "3rem",
    lg: "3rem",
  },
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  alignItems: "stretch",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  gap: {
    xs: 0,
    md: 4,
  },
};

const headingStyle = {
  ...H2_STYLE,
  textTransform: "uppercase",
  whiteSpace: {
    xs: "wrap",
    md: "nowrap",
  },
};

const titleStyle: CSSProperties = {
  margin: "auto 0",
};

const descriptionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

export default function DetailingServiceSection() {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate(ROUTES.DETAILING);
  };

  return (
    <div style={containerStyle}>
      <Box component={"img"} src={DETAILINGBG_JPG} sx={imgStyle} />
      <div style={darkOverlay} onClick={handleSectionClick}>
        <Stack sx={stackStyle}>
          <div style={titleStyle}>
            <Typography variant="h2" sx={headingStyle}>
              {DETAILING_TITLE[0]}
            </Typography>
            <Typography variant="h1" sx={headingStyle}>
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
