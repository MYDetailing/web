import React, { CSSProperties, useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { VISION, TITLE, SUBTITLE } from "./constants/strings";
import theme from "./constants/styles";
import { ROUTES } from "./constants/resourceLocations";
import LandingPage from "./pages/HomePage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import LinksPage from "./pages/LinksPage";
import DetailingPage from "./pages/DetailingPage";

const wrapperBoxStyle: CSSProperties = {
  backgroundColor: SITE_BG_COL,
  color: SITE_TXT_COL,
  minHeight: "100vh",
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <title>
        {TITLE} - {SUBTITLE}
      </title>
      <meta name="description" content={VISION} />
      <meta
        name="keywords"
        content="car detailing, clean, shine, polish, Winkler, window tint, car tint, tint, ppf"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Box style={wrapperBoxStyle}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.DETAILING} element={<DetailingPage />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.LINKS} element={<LinksPage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
