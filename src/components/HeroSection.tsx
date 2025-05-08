import { CSSProperties } from "react";
import { Typography } from "@mui/material";
import { SLOGAN, TITLE } from "../constants/strings";
import { LOGO_TEXT_PNG, VIDEO_MP4 } from "../constants/resourceLocations";
import { VIDEO_OVERLAY_COL } from "../constants/colors";
import { H6_STYLE } from "../constants/theme";

const videoStyle: CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const logoTextContainerStyle: CSSProperties = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: VIDEO_OVERLAY_COL,
};

const logoTextStyle: CSSProperties = {
  width: "350px",
};

const sloganTextStyle: CSSProperties = {
  position: "relative",
  marginTop: "auto",
  marginBottom: "1rem",
};

export default function HeroSection() {
  return (
    <>
      <video autoPlay loop muted playsInline preload="auto" style={videoStyle} src={VIDEO_MP4} />
      <div style={logoTextContainerStyle}>
        <img src={LOGO_TEXT_PNG} alt={TITLE} style={logoTextStyle} />
      </div>
      <Typography variant="h6" style={sloganTextStyle} sx={H6_STYLE}>
        {SLOGAN}
      </Typography>
    </>
  );
}
