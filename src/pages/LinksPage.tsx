// page that contains various links to socials.

import { CSSProperties } from "react";
import {
  CONTACT_SECTION,
  GOOGLE_MAPS_LINK,
  INSTA_LINK,
  LOGO_TEXT_PNG,
  VIDEO_MP4,
  WEBSITE_LINK,
} from "../constants/resourceLocations";
import { SITE_TXT_COL } from "../constants/colors";
import { Button, Typography } from "@mui/material";
import { SLOGAN, TITLE } from "../constants/strings";
import { H6_STYLE } from "../constants/styles";

const videoStyle: CSSProperties = {
  width: "100%",
  height: "100vh",
  position: "absolute",
  objectFit: "cover",
};

const videoOverlayStyle: CSSProperties = {
  width: "100%",
  height: "100vh",
  position: "absolute",
  backgroundColor: "rgb(0,0,0, 0.65)",
  padding: "1rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logoTextStyle: CSSProperties = {
  width: "350px",
  marginBottom: ".5rem",
};

const buttonStyle: CSSProperties = {
  borderRadius: "0px",
  borderBottom: `2px solid ${SITE_TXT_COL}`,
  margin: "0 auto",
  fontSize: "1.4rem",
};

const buttonsWrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  flex: 1,
};

export default function LinksPage() {
  return (
    <>
      <video autoPlay loop muted playsInline preload="auto" style={videoStyle} src={VIDEO_MP4} />
      <div style={videoOverlayStyle}>
        <img src={LOGO_TEXT_PNG} alt={TITLE} style={logoTextStyle} />
        <Typography variant="h6" sx={H6_STYLE}>
          {SLOGAN}
        </Typography>
        <div style={buttonsWrapperStyle}>
          <Button variant="outlined" style={buttonStyle} href={WEBSITE_LINK}>
            website
          </Button>
          <Button variant="outlined" style={buttonStyle} href={INSTA_LINK}>
            instagram
          </Button>
          <Button variant="outlined" style={buttonStyle} href={CONTACT_SECTION}>
            contact
          </Button>
          <Button variant="outlined" style={buttonStyle} href={GOOGLE_MAPS_LINK}>
            google maps
          </Button>
        </div>
      </div>
    </>
  );
}
