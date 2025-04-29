import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import ServicesSection from "./components/ServicesSection";
import "./assets/fonts/fonts.css";
import "./global.css";

const sections = ["Services", "Contact"];

const theme = createTheme({
  palette: {
    secondary: {
      main: "#8e24aa"
    },
  },
  typography: {
    allVariants: {
      background: `linear-gradient(
          120deg,
        #ffffff 0%,
        #aaaaaa 50%,
        #ffffff 100%
        )`,
      backgroundSize: "200% auto",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      animation: "shineText 7s ease-in-out infinite",
    },
    h4: {
      fontFamily: "Elemental",
    },
    h5: {
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase"
    },
    subtitle1: {
      fontFamily: "Futura",
      textAlign: "justify",
      textTransform: "uppercase",
      fontSize: "1.1rem",
      lineHeight: "1.3",
    },
    subtitle2: {
      fontSize: "1.2rem",
    },
    body1: {
      fontStyle: "italic",
      fontSize: "1.2rem",
      textAlign: "start",
    },

  },
});

const App: React.FC = () => {
  useEffect(() => {
    document.title = "MY Detailing";
  });

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
      <Box
        style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <AppBar
          position="fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="/logofull.png"
              alt="Detailing Co."
              style={{ height: "40px" }}
            />
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
            <img
              src="/logotext.png"
              alt="MY Detailing"
              style={{ width: "350px" }}
            />
          </div>
          <Typography variant="h6" style={{position: "relative", marginTop: "auto", marginBottom: "1rem"}}>
            WE CLEAN YOU SHINE
          </Typography>
        </section>

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
           AT MY DETAILING, WE BELIEVE YOUR VEHICLE DESERVES MORE THAN JUST A
            WASH. OUR EXPERT SERVICES REJUVENATE, PROTECT, AND ELEVATE YOUR
            VEHICLE’S APPEARANCE, INSIDE AND OUT. WITH PREMIUM PRODUCTS AND
            METICULOUS CARE, WE DELIVER RESULTS THAT EMBODY TRUE CRAFTSMANSHIP.

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

          if (section == "Services") sectionPart = <ServicesSection />;
          else
            sectionPart = (
              <div>
                <Typography variant="h3" gutterBottom>
                  {section}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ maxWidth: "600px", color: "#fff" }}
                >
                  {section} content goes here. Add more details as needed.
                </Typography>
              </div>
            );

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
