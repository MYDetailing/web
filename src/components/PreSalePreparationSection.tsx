import { Box, Grid, Typography } from "@mui/material";

import { Package, Service } from "../types";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import { PRESALE_PREP_PACKAGE } from "../constants/values";
import InfoToolTipText from "./InfoToolTipText";

const containerBoxStyle = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
};

const servicesGridStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: "1rem",
};

const gridSize = {
  xs: 12,
  sm: 6,
  lg: 4,
};

const allServices: Service[] = serviceData.services;
const preSalePrepPackage: Package = packageData.packages[PRESALE_PREP_PACKAGE];

interface Props {
  vehicleType: number;
}

export default function PreSalePreparationSection({ vehicleType }: Props) {
  // build an array of preSalePrep Services
  const preSalePrepServices: Service[] = [];
  preSalePrepPackage.services.forEach((serviceId) => {
    const curService = allServices[serviceId];
    preSalePrepServices.push(curService);
  });

  // I partition the services into 6 sections, so they can be arranged into 1, 2, or 3 columns
  const numServicePartitions = 6;

  return (
    <Box>
      <Typography variant="h2" sx={containerBoxStyle}>
        {preSalePrepPackage.name}
      </Typography>
      <Typography variant="h4">${preSalePrepPackage.prices[vehicleType]}</Typography>
      <Typography variant="subtitle1">{preSalePrepPackage.description}</Typography>
      <Grid container sx={servicesGridStyle} columnSpacing={4}>
        {
          // partition the services and put them in a grid that has adapts column count to
          Array.from({ length: numServicePartitions }).map((_, i) => {
            const columnSize = Math.floor(preSalePrepServices.length / numServicePartitions);
            const curServices = preSalePrepServices.slice(i * columnSize, (i + 1) * columnSize);
            return (
              <Grid size={gridSize}>
                {curServices.map((service: Service) => (
                  <InfoToolTipText text={service.name} tip={service.description} />
                ))}
              </Grid>
            );
          })
        }
      </Grid>
    </Box>
  );
}
