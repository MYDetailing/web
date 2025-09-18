// section that shows the service categories that we offer

import { Grid2 } from "@mui/material";
import { CSSProperties } from "react";

import DetailingServiceSection from "./DetailingServiceSection";

const gridContainerStyle: CSSProperties = {};

const gridBoxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
};

const detailingBoxStyle = {
  height: {
    xs: "425px",
    sm: "350px",
    md: "450px",
  },
};

export default function ServicesSection() {
  return (
    <>
      <Grid2 container spacing={5} sx={gridContainerStyle}>
        <Grid2 sx={{ background: "red", ...gridBoxStyle, ...detailingBoxStyle }} size={12}>
          <DetailingServiceSection />
        </Grid2>
        <Grid2 sx={{ background: "blue", ...gridBoxStyle }} size={6} height={"350px"}></Grid2>
        <Grid2 sx={{ background: "yellow", ...gridBoxStyle }} size={6} height={"350px"}></Grid2>
      </Grid2>
    </>
  );
}
