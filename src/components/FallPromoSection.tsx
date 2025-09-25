// card that shows the fall promotion ad

import { Typography, Box } from "@mui/material";
import ImgBackgroundSection from "./ImgBackgroundSection";

import { FALL_PROMO_JPG } from "../constants/resourceLocations";
import { FALL_PROMO } from "../constants/strings";

const priceContainerStyle = {
  display: "flex",
};

const oldPriceStyle = {
  textDecoration: "line-through",
};

const descriptionStyle = {
    padding: "1rem 0",
};

export default function FallPromoSection() {
  return (
    <ImgBackgroundSection imgSrc={FALL_PROMO_JPG}>
      <Typography variant="h2">{FALL_PROMO.HEADING[0]}</Typography>
      <Typography variant="h1">{FALL_PROMO.HEADING[1]}</Typography>
      <Box sx={priceContainerStyle}>
        <Typography variant="h4" sx={oldPriceStyle}>
          {FALL_PROMO.COST_OG}
        </Typography>
        <Typography variant="h4">{FALL_PROMO.COST_SALE}</Typography>
      </Box>
      <Typography variant="subtitle1" sx={descriptionStyle}>{FALL_PROMO.DESCRIPTION[0]}</Typography>
    </ImgBackgroundSection>
  );
}
