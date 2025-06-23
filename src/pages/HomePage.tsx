// home page

import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import ContactSection from "../components/ContactSection";
import ServicesSection from "../components/ServicesSection";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import VisionSection from "../components/VisionSection";
import ServiceAddSection from "../components/ServiceAddSection ";

import { LG_SECTION_APPEAR_THRESHOLD, SM_SECTION_APPEAR_THRESHOLD } from "../constants/values";
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
  minHeight: "30vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  padding: "5rem 2rem",
  textAlign: "center",
};

export default function LandingPage() {
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

  const { ref: packagesRef, inView: packagesInView } = useInView({
    threshold: LG_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: SM_SECTION_APPEAR_THRESHOLD,
    triggerOnce: false,
  });

  // use useRef since it's state persists between renders, and regular variables might not
  const hasRunOnce = useRef(false);

  // sets the active section variable and the URl according to hash based navigation
  useEffect(() => {
    // Skip the first run to let the browser scroll to the anchor naturally
    if (!hasRunOnce.current) {
      hasRunOnce.current = true;
    } else {
      if (packagesInView) {
        setActiveSection(NAV_BAR_SECTIONS[0]);
      } else if (contactInView) {
        setActiveSection(NAV_BAR_SECTIONS[1]);
      } else {
        setActiveSection("");
      }
      history.replaceState(null, "", "#");

    }
  }, [packagesInView, contactInView]);

  // Scroll to anchor on first mount (once DOM is painted)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for layout + DOM nodes to be ready
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // Delay to let rendering finish
    }
  }, []);

  return (
    <>
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
        ref={packagesRef}
        id={NAV_BAR_SECTIONS[0]}
        {...motionSectionProps}
        animate={{ opacity: packagesInView ? 1 : 0, y: packagesInView ? 0 : 50 }}
        style={servicesAndContactSectionsStyle}
      >
        <ServicesSection />
      </motion.section>

      {/* contact section */}
      <motion.section
        ref={contactRef}
        id={NAV_BAR_SECTIONS[1]}
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
      />
    </>
  );
}
