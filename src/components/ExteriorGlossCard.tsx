// exterior gloss and shield card on the home page

import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ImgBackgroundSection from "./ImgBackgroundSection";
import MyButton from "./MyButton";

import { EXTERIORBG_JPG, ROUTES } from "../constants/resourceLocations";
import { EXTERIOR_GLOSS_CARD_TEXT } from "../constants/strings";

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

export default function ExteriorGlossCard() {
  const navigate = useNavigate();

  function handleSectionClick() {
    navigate(ROUTES.EXTERIOR_GLOSS);
  }

  return (
    <ImgBackgroundSection
      imgSrc={EXTERIORBG_JPG}
      onClick={handleSectionClick}
      contentContainerStyle={ImgBackgroundSectionContentStyle}
    >
      <Box sx={containerBoxStyle}>
        <Box sx={headingContainerStyle}>
          <Typography variant="h2_sm" sx={headingStyle}>
            {EXTERIOR_GLOSS_CARD_TEXT.TITLE[0]}
          </Typography>
          <Typography variant="h1_sm" sx={headingStyle}>
            {EXTERIOR_GLOSS_CARD_TEXT.TITLE[1]}
          </Typography>
          <Typography variant="h6_sm">{EXTERIOR_GLOSS_CARD_TEXT.DESCRIPTION}</Typography>
        </Box>
        <Box sx={buttonWrapper}>
          <MyButton buttonText={EXTERIOR_GLOSS_CARD_TEXT.BUTTON_TEXT} />
        </Box>
      </Box>
    </ImgBackgroundSection>
  );
}
