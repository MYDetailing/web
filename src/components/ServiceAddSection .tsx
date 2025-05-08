// section that shows slides of some services with a brief description

import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import adData from "../data/ads.json";
import { CSSProperties } from "react";
import { SITE_TXT_COL } from "../constants/colors";

interface Ad {
  title: string;
  description: string;
}

const wrapperBoxStyle = {
  "& .slick-dots li button:before": {
    color: SITE_TXT_COL,
  },
};

const slideStackStyle: CSSProperties = {
  minHeight: "200px",
  padding: "0 5%",
};

const textStyle: CSSProperties = {
  whiteSpace: "pre-line",
};

export default function ServiceAddSection() {
  const ads: Ad[] = adData.ads;

  return (
    <Box sx={wrapperBoxStyle}>
      <Slider
        infinite
        slidesToScroll={1}
        slidesToShow={1}
        speed={2000}
        autoplay
        autoplaySpeed={6000}
        centerPadding="100px"
        arrows={false}
        dots
      >
        {ads.map((ad, index) => (
          <Box key={index}>
            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              sx={slideStackStyle}
            >
              <Typography variant="h2" sx={textStyle}>
                {ad.title}
              </Typography>
              <Typography variant="h3" sx={textStyle}>
                {ad.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
