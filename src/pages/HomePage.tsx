// home page

import { CSSProperties, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import ContactSection from "../components/ContactSection";
import ServicesSection from "../components/ServicesSection";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import VisionSection from "../components/VisionSection";
import ServiceAdSection from "../components/ServiceAdSection ";

import {
  LG_SECTION_APPEAR_THRESHOLD,
  SM_SECTION_APPEAR_THRESHOLD,
  SCROLL_MARGIN_TOP,
  CONTACT_SECTION_ID,
} from "../constants/values";
import { SECTION_PADDING, SIDE_MARGIN } from "../constants/styles";
import { NAV_BAR_SECTIONS } from "../constants/strings";

const motionSectionProps = {
  initial: { opacity: 0, y: 50 },
  transition: { duration: 0.5 },
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
  margin: `4rem ${SIDE_MARGIN} ${SECTION_PADDING}`,
  textAlign: "center",
};

const serviceAdsSectionStyle: CSSProperties = {
  margin: `${SECTION_PADDING} ${SIDE_MARGIN}`,
  textAlign: "center",
  paddingBottom: "3rem",
};

const servicesSectionStyle: CSSProperties = {
  padding: `${SECTION_PADDING} ${SIDE_MARGIN}`,
  scrollMarginTop: SCROLL_MARGIN_TOP,
};

const contactSectionStyle: CSSProperties = {
  minHeight: "65vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  textAlign: "center",
  scrollMarginTop: SCROLL_MARGIN_TOP,
};

export default function LandingPage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log(`no element ${element}`);
      }
    }
  }, [pathname, hash]);

  function scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  // section observers
  const { ref: videoRef } = useInView({
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

  return (
    <>
      {/* navigation bar */}
      <NavBar />

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
        <ServiceAdSection />
      </motion.section>

      {/* services section */}
      <motion.section
        ref={servicesRef}
        id={NAV_BAR_SECTIONS[0].TITLE}
        {...motionSectionProps}
        animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 50 }}
        style={servicesSectionStyle}
      >
        <ServicesSection />
      </motion.section>

      {/* contact section */}
      <motion.section
        ref={contactRef}
        id={NAV_BAR_SECTIONS[CONTACT_SECTION_ID].TITLE}
        {...motionSectionProps}
        animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }}
        style={contactSectionStyle}
      >
        <ContactSection />
      </motion.section>
    </>
  );
}
