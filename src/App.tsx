import React, { CSSProperties, useEffect, useState } from "react";
import { ThemeProvider, Box } from "@mui/material";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { VISION, TITLE, SUBTITLE, NAV_BAR_SECTIONS } from "./constants/strings";
import { SITE_BG_COL, SITE_TXT_COL } from "./constants/colors";
import { SECTION_APPEAR_THRESHOLD } from "./constants/values";
import theme from "./constants/theme";

import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/fonts/fonts.css";
import "./global.css";
import VisionSection from "./components/VisionSection";
import ServiceAddSection from "./components/ServiceAddSection ";

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

const App: React.FC = () => {
  // keep track of active section
  const [activeSection, setActiveSection] = useState("");

  function scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

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

        {/* service ads section */}
        <motion.section
          ref={adsRef}
          {...motionSectionProps}
          animate={{ opacity: adsInView ? 1 : 0, y: adsInView ? 0 : 50 }}
          style={serviceAdsSectionStyle}
        >
          <ServiceAddSection />
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
