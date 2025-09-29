// section that shows the service categories that we offer

import { Grid } from "@mui/material";
import { CSSProperties } from "react";

import DetailingServiceSection from "./DetailingServiceSection";

const gridContainerStyle: CSSProperties = {};

const gridBoxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
};

/*
const otherBoxStyle = {
  height: {
    xs: "200px",
    sm: "200px",
    md: "200px",
  },
};
*/

export default function ServicesSection() {
  return (
    <>
      <Grid container spacing={5} sx={gridContainerStyle}>
        <Grid sx={gridBoxStyle} size={12}>
          <DetailingServiceSection />
        </Grid>
        {/** 
        <Grid sx={{ background: "blue", ...gridBoxStyle, ...otherBoxStyle }} size={{xs:12, md: 6}}></Grid>
        <Grid sx={{ background: "yellow", ...gridBoxStyle, ...otherBoxStyle }} size={{xs:12, md: 6}}></Grid>
        */}
      </Grid>
    </>
  );
}
