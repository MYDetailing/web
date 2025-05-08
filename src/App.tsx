import React, { CSSProperties, useEffect, useState } from "react";
import { Typography, Button, ThemeProvider, Box, Stack } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";

import { VISION, TITLE, SUBTITLE, NAV_BAR_SECTIONS } from "./constants/strings";
import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { SECTION_APPEAR_THRESHOLD } from "./constants/values";
import theme from "./constants/theme";
import adData from "./data/ads.json";

import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";
import VisionSection from "./components/VisionSection";

const motionSectionProps = {
  initial: { opacity: 0, y: 50 },
  transition: { duration: 0.5 },
};

const wrapperBoxStyle: CSSProperties = {
  backgroundColor: SITE_BG_COL,
  color: SITE_TXT_COL,
  minHeight: "100vh",
};

const heroSectionStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const visionSectionStyle: CSSProperties = {
  margin: "4rem 10% 2rem",
  textAlign: "center",
};

interface Ad {
  title: string;
  description: string;
}

const App: React.FC = () => {
  // keep track of active section
  const [activeSection, setActiveSection] = useState("");

  function scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  const ads: Ad[] = adData.ads;

  // section observers
  const { ref: videoRef, inView: videoInView } = useInView({
    threshold: SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: adsRef, inView: adsInView } = useInView({
    threshold: SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  useEffect(() => {
    if (videoInView) {
      setActiveSection("");
    }
  }, [videoInView]);

  useEffect(() => {
    if (footerInView) {
      setActiveSection("");
    }
  }, [footerInView]);

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
        {/* navigation bar */}
        <NavBar
          sections={NAV_BAR_SECTIONS}
          onSectionChange={scrollToSection}
          activeSection={activeSection}
        />

        {/* hero section with video*/}
        <section ref={videoRef} style={heroSectionStyle}>
          <HeroSection />
        </section>

        {/* vision section */}
        <motion.section
          ref={visionRef}
          {...motionSectionProps}
          animate={{ opacity: visionInView ? 1 : 0, y: visionInView ? 0 : 50 }}
          style={visionSectionStyle}
        >
          <VisionSection scrollToSection={scrollToSection} />
        </motion.section>

        {/* ads Section */}
        <motion.section
          ref={adsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: adsInView ? 1 : 0, y: adsInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          style={{
            margin: "4rem 5% 2rem",
            textAlign: "center",
            paddingBottom: "3rem",
          }}
        >
          <Box
            sx={{
              "& .slick-dots li button:before": {
                color: "#fff",
              },
            }}
          >
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
                    sx={{ minHeight: "200px" }}
                  >
                    <Typography variant="h2" sx={{ whiteSpace: "pre-line", marginLeft: "5%" }}>
                      {ad.title}
                    </Typography>
                    <Typography variant="h3" sx={{ whiteSpace: "pre-line", marginRight: "5%" }}>
                      {ad.description}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Slider>
          </Box>
        </motion.section>

        {/* Services and Contact Sections */}
        {NAV_BAR_SECTIONS.map((section) => {
          const { ref, inView } = useInView({
            threshold: 0.05,
            triggerOnce: false,
          });

          useEffect(() => {
            if (inView) {
              setActiveSection(section);
            }
          }, [inView, section]);

          let sectionPart = null;

          if (section == "Services") sectionPart = <ServicesSection />;
          else sectionPart = <ContactSection />;

          return (
            <motion.section
              key={section}
              id={section}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5 }}
              style={{
                minHeight: "65vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                padding: "2rem",
                textAlign: "center",
                marginBottom: "10rem",
                scrollMarginTop: "80px",
              }}
            >
              {sectionPart}
            </motion.section>
          );
        })}

        {/* footer section */}
        <motion.section
          ref={footerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          style={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            padding: "5rem 2rem",
            textAlign: "center",
          }}
        ></motion.section>
      </Box>
    </ThemeProvider>
  );
};

export default App;
