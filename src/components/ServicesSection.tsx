// section that shows all the services
import { CSSProperties, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid2, Box, Stack, CardContent, Card, Button } from "@mui/material";

import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import {
  ALL_VEHICLE_TYPES,
  CUSTOM_PKG_TITLE,
  CUSTOM_PKG_DESCRIPTION,
  ALL_SERVICES_BTN_TXT,
  COMPARE_PKG_BTN_TXT,
} from "../constants/strings";
import {
  DEFAULT_VEHICLE_TYPE,
  FIRST_CAR_PACKAGE,
  LAST_CAR_PACKAGE,
  FIRST_SEMI_PACKAGE,
  LAST_SEMI_PACKAGE,
  FIRST_RV_PACKAGE,
  ROUTES,
} from "../constants/values";
import { H6_STYLE, SERVICE_CARD_CONTENT_STYLE, SERVICE_CARD_STYLE } from "../constants/styles";
import { CARD_BORDER_COL, SITE_TXT_COL, UNSELECTED_COL } from "../constants/colors";

import { Service, Package } from "../types.ts";
import SelectorTabs from "./SelectorTabs.tsx";

const wrapperBoxStyle: CSSProperties = {
  maxWidth: "100%",
};

const gridSize = {
  xs: 12,
  sm: 6,
  md: 4,
};

const gridStyle: CSSProperties = {
  border: `4px solid ${CARD_BORDER_COL}`,
  borderRadius: "5px",
};

const buttonStyle: CSSProperties = {
  borderRadius: "0px",
  borderBottom: `2px solid ${SITE_TXT_COL}`,
  margin: "0 auto",
};

const allServices: Service[] = serviceData.services;
const allPackages: Package[] = packageData.packages;

// goes through passed package, and gets its services
function getServices(packageId: number): string[] {
  let servicesArray: string[] = [];

  allPackages[packageId].services.forEach((serviceIndex) => {
    servicesArray.push(allServices[serviceIndex].name);
  });

  return servicesArray;
}

// goes through passed package, and gets its hints
function getHints(packageId: number): string[] {
  let hintsArray: string[] = [];
  allPackages[packageId].services.forEach((serviceIndex) => {
    hintsArray.push(allServices[serviceIndex].description);
  });

  return hintsArray;
}

export default function ServicesSection() {
  const navigate = useNavigate();

  const [vehicleType, setVehicleType] = useState(DEFAULT_VEHICLE_TYPE);

  // the packages displayed now
  const curPackages = useMemo(() => {
    if (vehicleType >= 0 && vehicleType <= 2) {
      return allPackages.slice(FIRST_CAR_PACKAGE, LAST_CAR_PACKAGE);
    } else if (vehicleType === 3) {
      return allPackages.slice(FIRST_SEMI_PACKAGE, LAST_SEMI_PACKAGE);
    } else {
      return allPackages.slice(FIRST_RV_PACKAGE);
    }
  }, [vehicleType]);

  function handleVehicleTypeChange(event: React.SyntheticEvent, newValue: number) {
    setVehicleType(newValue);
  }

  function handleViewServicesBtn() {
    navigate(ROUTES.SERVICES_ROUTE);
  }

  return (
    <Box sx={wrapperBoxStyle}>
      <SelectorTabs
        title={"Vehicle Type"}
        selectedOption={vehicleType}
        onChange={handleVehicleTypeChange}
        allOptions={ALL_VEHICLE_TYPES}
      />

      <Grid2 container rowSpacing={4} columnSpacing={4} justifyContent="center">
        {curPackages.map((curPackage: Package) => {
          return (
            <Grid2 key={curPackage.id} size={gridSize} sx={gridStyle}>
              <ServiceCard
                heading={curPackage.name}
                description={curPackage.description}
                price={
                  0 <= vehicleType && vehicleType <= 2
                    ? curPackage.prices[vehicleType]
                    : curPackage.prices[0]
                }
                time={curPackage.time}
                services={getServices(curPackage.id)}
                hints={getHints(curPackage.id)}
                previousPackage={
                  curPackage.previousServiceLabel ? allPackages[curPackage.id - 1].name : ""
                }
              />
            </Grid2>
          );
        })}

        {/* custom packages*/}
        <Grid2 sx={gridStyle} size={gridSize}>
          <Card sx={SERVICE_CARD_STYLE}>
            <CardContent sx={SERVICE_CARD_CONTENT_STYLE}>
              <Stack spacing={1}>
                <Typography variant="h4">{CUSTOM_PKG_TITLE}</Typography>
                <Typography variant="subtitle1">{CUSTOM_PKG_DESCRIPTION}</Typography>
                <Stack spacing={3}>
                  <Button sx={buttonStyle} onClick={handleViewServicesBtn}>
                    <Typography variant="h6" sx={H6_STYLE} textAlign={"center"}>
                      {ALL_SERVICES_BTN_TXT}
                    </Typography>
                  </Button>
                  <Button sx={{ ...buttonStyle, display: "none" }}>
                    <Typography variant="h6" sx={H6_STYLE} textAlign={"center"}>
                      {COMPARE_PKG_BTN_TXT}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
