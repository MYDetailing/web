import React, { CSSProperties, useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { VISION, TITLE, SUBTITLE } from "./constants/strings";
import theme from "./constants/styles";
import { ROUTES } from "./constants/values";
import LandingPage from "./pages/HomePage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";
import ServicesPage from "./pages/ServicesPage";

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
          <ScrollToTop />
          <Routes>
            <Route path={ROUTES.HOME_ROUTE} element={<LandingPage />} />
            <Route path={ROUTES.SERVICES_ROUTE} element={<ServicesPage />}/>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
