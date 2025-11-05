// window tint card on the home page

import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ImgBackgroundSection from "./ImgBackgroundSection";
import MyButton from "./MyButton";

import { ROUTES, WINDOWTINTBG_JPG } from "../constants/resourceLocations";
import { TINT_CARD_TEXT } from "../constants/strings";

const containerBoxStyle = {
  display: "flex",
  flexDirection: "column",
};

const headingContainerStyle = {
  display: "flex",
  flexDirection: "column",
  paddingBottom: {
    xs: "2rem",
  },
};

const buttonWrapper = {
  display: "flex",
  justifyContent: "center",
};

const ImgBackgroundSectionContentStyle = {
  padding: {
    xs: "1rem",
    md: "1.5rem",
  },
};

const headingStyle = {
  textTransform: "uppercase",
};

export default function WindowTintCard() {
  const navigate = useNavigate();

  function handleSectionClick() {
    navigate(ROUTES.WINDOW_TINT)
  }

  return (
    <ImgBackgroundSection
      imgSrc={WINDOWTINTBG_JPG}
      onClick={handleSectionClick}
      contentContainerStyle={ImgBackgroundSectionContentStyle}
    >
      <Box sx={containerBoxStyle}>
        <Box sx={headingContainerStyle}>
          <Typography variant="h2_sm" sx={headingStyle}>
            {TINT_CARD_TEXT.TITLE[0]}
          </Typography>
          <Typography variant="h1_sm" sx={headingStyle}>
            {TINT_CARD_TEXT.TITLE[1]}
          </Typography>
          <Typography variant="h6_sm">{TINT_CARD_TEXT.DESCRIPTION}</Typography>
        </Box>
        <Box sx={buttonWrapper}>
          <MyButton buttonText={TINT_CARD_TEXT.BUTTON_TEXT} />
        </Box>
      </Box>
    </ImgBackgroundSection>
  );
}
