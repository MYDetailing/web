import React, { CSSProperties, useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
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
import WindowTintPage from "./pages/WindowTintPage";
import ExteriorGlossPage from "./pages/ExteriorGlossPage";

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

      <Box style={wrapperBoxStyle}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path={ROUTES.HOME} element={<LandingPage />} />
            <Route path={ROUTES.DETAILING} element={<DetailingPage />} />
            <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.LINKS} element={<LinksPage />} />
            <Route path={ROUTES.WINDOW_TINT} element={<WindowTintPage />} />
            <Route path={ROUTES.EXTERIOR_GLOSS} element={<ExteriorGlossPage />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
