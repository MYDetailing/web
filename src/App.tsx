import React, { CSSProperties } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { VISION, TITLE, SUBTITLE } from "./constants/strings";
import theme from "./constants/styles";
import LandingPage from "./pages/LandingPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";

const wrapperBoxStyle: CSSProperties = {
  backgroundColor: SITE_BG_COL,
  color: SITE_TXT_COL,
  minHeight: "100vh",
};
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>
          {TITLE} - {SUBTITLE}
        </title>
        <meta name="description" content={VISION} />
        <meta
          name="keywords"
          content="car detailing, detailing, detailing Winkler, wax, polish, ceramic, clean, shine"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Box style={wrapperBoxStyle}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
