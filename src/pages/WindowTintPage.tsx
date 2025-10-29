// window tint page

import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import NavBar from "../components/NavBar";
import ContactSection from "../components/ContactSection";

import { TINT_CAR_PNG, TINT_CAR_SM_PNG } from "../constants/resourceLocations";
import { TINT_PAGE } from "../constants/strings";
import { SIDE_MARGIN } from "../constants/styles";

const CONTACT_SECTION_ID = "contact";

const headingStyle = {
  paddingTop: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const carImageStyle = {
  display: {
    xs: "none",
    sm: "inline",
  },
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const carImageStyleXs = {
  display: {
    xs: "inline",
    sm: "none",
  },
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const headingTextStyle = {
  padding: `1rem ${SIDE_MARGIN}`,
  textAlign: "center",
};

const textContainerStyle = {
  padding: `0 ${SIDE_MARGIN}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const contactSectionWrapper = {
  width: "100%",
};

const accordionStyle = {
  background: "transparent",
};

const faqQuestionStyle = {
  textAlign: "center",
  fontWeight: 600,
  width: "100%",
};

export default function WindowTintPage() {

  return (
    <Box>
      <NavBar />
      <Box sx={headingStyle}>
        <Typography variant="h2" sx={headingTextStyle}>{TINT_PAGE.HEADING1}</Typography>
        <Typography variant="h6" sx={headingTextStyle}>
          {TINT_PAGE.SUBHEADING1}
        </Typography>
        <Typography variant="h6" sx={headingTextStyle}>
          {TINT_PAGE.SUBHEADING2}
        </Typography>
      </Box>

      <Box sx={carImageStyleXs} component="img" src={TINT_CAR_SM_PNG}></Box>
      <Box sx={carImageStyle} component="img" src={TINT_CAR_PNG}></Box>

      <Box sx={textContainerStyle}>
        <Typography variant="h2">{TINT_PAGE.FAQ_HEADING}</Typography>

        {TINT_PAGE.FAQ.map((faq) => {
          return (
            <Accordion sx={accordionStyle}>
              <AccordionSummary>
                <Typography variant="h5" sx={faqQuestionStyle}>
                  {faq.Q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">{faq.A}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <Box id={CONTACT_SECTION_ID} sx={contactSectionWrapper}>
        <ContactSection />
      </Box>
    </Box>
  );
}
