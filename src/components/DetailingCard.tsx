// detailing card on the home page

import { CSSProperties } from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { DETAILINGBG_JPG, ROUTES } from "../constants/resourceLocations";
import { H1_H2_STYLE, H6_STYLE } from "../constants/styles";

import { DETAILING_TITLE, DETAILING_DESCRIPTION, DETAILING_BTN_TXT } from "../constants/strings";

import MyButton from "./MyButton";
import ImgBackgroundSection from "./ImgBackgroundSection";

const stackStyle = {
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
  ...H1_H2_STYLE,
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
  flexDirection: "column",
  gap: "2rem",
};

export default function DetailingServiceSection() {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate(ROUTES.DETAILING);
  };

  return (
    <ImgBackgroundSection imgSrc={DETAILINGBG_JPG} onClick={handleSectionClick}>
      <Stack sx={stackStyle}>
        <div style={titleStyle}>
          <Typography variant="h2" sx={headingStyle}>
            {DETAILING_TITLE[0]}
          </Typography>
          <Typography variant="h1" sx={headingStyle}>
            {DETAILING_TITLE[1]}
          </Typography>
        </div>
        <Stack style={descriptionStyle}>
          <Typography variant="h6" sx={H6_STYLE}>
            {DETAILING_DESCRIPTION}
          </Typography>
          <MyButton buttonText={DETAILING_BTN_TXT} />
        </Stack>
      </Stack>
    </ImgBackgroundSection>
  );
}
