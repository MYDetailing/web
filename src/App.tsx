import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ServicesSection from "./ServicesSection";
import "./assets/fonts/fonts.css";

const sections = ["Services", "Contact"];

const App: React.FC = () => {
  useEffect(() => {
    document.title = "MY Detailing"
  })

  const [activeSection, setActiveSection] = useState("");

  // Hero section observer
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (homeInView) {
      setActiveSection(""); // Unselect services when in home section
    }
  }, [homeInView]);

  // Footer section observer
  const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.3, triggerOnce: false })

  useEffect(() => {
    if (footerInView) {
      setActiveSection("")
    }
  }, [footerInView])

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar position="fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img src="/logofull.png" alt="Detailing Co." style={{ height: "40px" }} />
          <div>
            {sections.map((section) => (
              <Button
                key={section}
                color={activeSection === section ? "secondary" : "inherit"}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {section}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section with Video */}
      <section ref={homeRef} style={{ position: "relative", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
          src="/video.mp4"
        />
        <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <img src="/logotext.png" alt="Detailing Co." style={{ width: "350px" }} />
        </div>
      </section>

      {/* Services and Contact Sections */}
      {sections.map((section) => {
        const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

        useEffect(() => {
          if (inView) {
            setActiveSection(section);
          }
        }, [inView, section]);

        let sectionPart = null;

        if (section == "Services")
          sectionPart = <ServicesSection />;
        else
          sectionPart =  
          <div>
          <Typography variant="h3" gutterBottom>{section}</Typography>
            <Typography variant="body1" style={{ maxWidth: "600px", color: "#fff" }}>
              {section} content goes here. Add more details as needed.
            </Typography>
            </div>

        return (
          <motion.section
            key={section}
            id={section}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: "65vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", padding: "5rem 2rem", textAlign: "center" }}
          >
            { sectionPart }
          </motion.section>
        );
      })}

      { /* footer section */ }
      <motion.section
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", padding: "5rem 2rem", textAlign: "center" }}
      >
      </motion.section>
    </div>
  );
};

export default App;
