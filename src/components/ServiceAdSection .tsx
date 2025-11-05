// section that shows slides of some services with a brief description

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import adData from "../data/ads.json";
import { CSSProperties } from "react";
import { SITE_TXT_COL } from "../constants/colors";

interface Ad {
  desktopTitle: string;
  mobileTitle: string;
  description: string;
}

const containerBox = {
  "& .slick-dots li button:before": {
    color: SITE_TXT_COL,
  },
};

const slideStackStyle = {
  minHeight: "200px",
  padding: "0 5px",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { xs: "start", md: "space-between" },
  alignItems: { xs: "start", md: "center" },
};

const textStyle: CSSProperties = {
  whiteSpace: "pre-line",
};

export default function ServiceAdSection() {
  const ads: Ad[] = adData.ads;
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  // gets the correct title based on screen size
  function getAdTitle(index: number) {
    if (isSmUp) return ads[index].desktopTitle;
    else return ads[index].mobileTitle;
  }

  const h2_size_dep_style = {
    paddingBottom: {
      xs: "0.5rem",
      sm: "0",
    },
  };

  const h3_size_dep_style = {
    textAlign: {
      xs: "left",
      sm: "right",
    },
  };

  return (
    <Box sx={containerBox}>
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
            <Stack sx={slideStackStyle}>
              <Typography variant="h2" sx={{ ...textStyle, ...h2_size_dep_style }}>
                {getAdTitle(index)}
              </Typography>
              <Typography variant="h3" sx={{ ...textStyle, ...h3_size_dep_style }}>
                {ad.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
