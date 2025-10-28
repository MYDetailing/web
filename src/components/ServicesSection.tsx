// section that shows the service categories that we offer

import { Grid } from "@mui/material";
import { CSSProperties } from "react";

import DetailingCard from "./DetailingCard";
import WindowTintCard from "./WindowTintCard";
import ExteriorGlossCard from "./ExteriorGlossCard";

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
          <DetailingCard />
        </Grid>

        <Grid sx={gridBoxStyle} size={{ xs: 12, md: 6 }}>
          <WindowTintCard />
        </Grid>
        <Grid sx={gridBoxStyle} size={{ xs: 12, md: 6 }}>
          <ExteriorGlossCard />
        </Grid>
      </Grid>
    </>
  );
}
