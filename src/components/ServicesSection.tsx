// section that shows the service categories that we offer

import { Grid } from "@mui/material";
import { CSSProperties } from "react";

import DetailingServiceSection from "./DetailingCard";
import WindowTintCard from "./WindowTintCard";

const gridContainerStyle: CSSProperties = {};

const gridBoxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
};

export default function ServicesSection() {
  return (
    <>
      <Grid container spacing={5} sx={gridContainerStyle}>
        <Grid sx={gridBoxStyle} size={12}>
          <DetailingServiceSection />
        </Grid>

        <Grid sx={gridBoxStyle} size={{ xs: 12, md: 6 }}>
          <WindowTintCard />
        </Grid>
        <Grid sx={{ background: "yellow", ...gridBoxStyle }} size={{ xs: 12, md: 6 }}></Grid>
      </Grid>
    </>
  );
}
