import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
  Box,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import ServicesSection from "./components/ServicesSection";
import "./assets/fonts/fonts.css";
import "./global.css";
import { VISION, SLOGAN, TITLE, SUBTITLE } from "./constants/strings";
import theme from "./constants/theme";
import { Helmet } from "react-helmet-async";
import ContactSection from "./components/ContactSection";

const sections = ["Services", "Contact"];

const App: React.FC = () => {
  
  const [activeSection, setActiveSection] = useState("");

  // Hero section observer
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  useEffect(() => {
    if (homeInView) {
      setActiveSection(""); // Unselect services when in home section
    }
  }, [homeInView]);

  // Footer section observer
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  useEffect(() => {
    if (footerInView) {
      setActiveSection("");
    }
  }, [footerInView]);

  const { ref: visionRef, inView: visionInView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{TITLE} - {SUBTITLE}</title>
        <meta
          name="description"
          content={VISION}
        />
        <meta
          name="keywords"
          content="car detailing, detailing, detailing Winkler, wax, polish, ceramic, clean, shine"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Box
        style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <AppBar
          position="fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <img src="/logofull.png" alt={TITLE} style={{ height: "40px" }} />
            <div>
              {sections.map((section) => (
                <Button
                  key={section}
                  color={activeSection === section ? "secondary" : "inherit"}
                  onClick={() => {
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>

        {/* Hero Section with Video */}
        <section
          ref={homeRef}
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="/video.mp4"
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <img src="/logotext.png" alt={TITLE} style={{ width: "350px" }} />
          </div>
          <Typography
            variant="h6"
            style={{
              position: "relative",
              marginTop: "auto",
              marginBottom: "1rem",
            }}
          >
            {SLOGAN}
          </Typography>
        </section>

        {/* Vision Section */}
        <motion.section
          ref={visionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: visionInView ? 1 : 0, y: visionInView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          style={{ margin: "4rem 10% 2rem", textAlign: "center" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
            }}
          >
            {VISION}
          </Typography>
        </motion.section>

        {/* Services and Contact Sections */}
        {sections.map((section) => {
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

          if (section == "Services") 
            sectionPart = <ServicesSection />;
          else
            sectionPart = <ContactSection />;

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
                marginBottom: "10rem"
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
