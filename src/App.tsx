import React, { CSSProperties, useEffect, useState } from "react";
import { ThemeProvider, Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { VISION, TITLE, SUBTITLE, NAV_BAR_SECTIONS } from "./constants/strings";
import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { LG_SECTION_APPEAR_THRESHOLD, SM_SECTION_APPEAR_THRESHOLD } from "./constants/values";
import theme from "./constants/theme";

import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import ServiceAddSection from "./components/ServiceAddSection ";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";

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

const serviceAdsSectionStyle: CSSProperties = {
  margin: "4rem 5% 2rem",
  textAlign: "center",
  paddingBottom: "3rem",
};

const servicesAndContactSectionsStyle: CSSProperties = {
  minHeight: "65vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  padding: "2rem",
  textAlign: "center",
  marginBottom: "8rem",
  scrollMarginTop: "80px",
};

const footerSectionStyle: CSSProperties = {
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  padding: "5rem 2rem",
  textAlign: "center",
};

const App: React.FC = () => {
  // keep track of active section
  const [activeSection, setActiveSection] = useState("");

  function scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  // section observers
  const { ref: videoRef, inView: videoInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: adsRef, inView: adsInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: LG_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!(servicesInView || contactInView)) {
      setActiveSection("");
    }
  }, [servicesInView, contactInView]);

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

        {/* service ads section */}
        <motion.section
          ref={adsRef}
          {...motionSectionProps}
          animate={{ opacity: adsInView ? 1 : 0, y: adsInView ? 0 : 50 }}
          style={serviceAdsSectionStyle}
        >
          <ServiceAddSection />
        </motion.section>

        {/* services section */}
        <motion.section
          ref={servicesRef}
          {...motionSectionProps}
          animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
          style={servicesAndContactSectionsStyle}
        >
          <ServicesSection />
        </motion.section>

        {/* contact section */}
        <motion.section
          ref={contactRef}
          {...motionSectionProps}
          animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }}
          style={servicesAndContactSectionsStyle}
        >
          <ContactSection />
        </motion.section>

        {/* footer section */}
        <motion.section
          ref={footerRef}
          {...motionSectionProps}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 50 }}
          style={footerSectionStyle}
        ></motion.section>
      </Box>
    </ThemeProvider>
  );
};

export default App;
