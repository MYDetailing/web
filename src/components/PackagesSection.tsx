// section that shows all the packages
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Typography, Grid, Box, Stack, CardContent, Card } from "@mui/material";

import ServiceCard from "./ServiceCard.tsx";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import {
  ALL_VEHICLE_TYPES,
  CUSTOM_PKG_TITLE,
  CUSTOM_PKG_DESCRIPTION,
  ALL_SERVICES_BTN_TXT,
  QUERY_STRINGS,
  VEHICLE_TYPE_QUERY_STRINGS,
} from "../constants/strings.ts";
import {
  DEFAULT_VEHICLE_TYPE,
  FIRST_CAR_PACKAGE,
  LAST_CAR_PACKAGE,
  FIRST_SEMI_PACKAGE,
  LAST_SEMI_PACKAGE,
  FIRST_RV_PACKAGE,
} from "../constants/values.ts";
import { ROUTES } from "../constants/resourceLocations.ts";
import { SERVICE_CARD_CONTENT_STYLE, SERVICE_CARD_STYLE } from "../constants/styles.ts";
import { CARD_BORDER_COL } from "../constants/colors.ts";

import { Service, Package } from "../types.ts";

import SelectorTabs from "./SelectorTabs.tsx";
import MyButton from "./MyButton.tsx";

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

const allServices: Service[] = serviceData.services;
const allPackages: Package[] = packageData.packages;

// goes through passed package, and gets its services
function getServices(packageId: number): string[] {
  const servicesArray: string[] = [];

  allPackages[packageId].services.forEach((serviceIndex) => {
    servicesArray.push(allServices[serviceIndex].name);
  });

  return servicesArray;
}

// goes through passed package, and gets its hints
function getHints(packageId: number): string[] {
  const hintsArray: string[] = [];
  allPackages[packageId].services.forEach((serviceIndex) => {
    hintsArray.push(allServices[serviceIndex].description);
  });

  return hintsArray;
}

export default function PackagesSection() {
  const navigate = useNavigate();

  // get vehicle type query string and set vehicle type
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicleTypeQueryString = searchParams.get(QUERY_STRINGS.VEHICLE_TYPE);

  const [vehicleType, setVehicleType] = useState(DEFAULT_VEHICLE_TYPE);

  useEffect(() => {
    if (vehicleTypeQueryString) {
      const queryStringVehicleTypeNumber =
        VEHICLE_TYPE_QUERY_STRINGS.indexOf(vehicleTypeQueryString);
      if (queryStringVehicleTypeNumber !== -1) setVehicleType(queryStringVehicleTypeNumber);
    }
  }, [vehicleTypeQueryString]);

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

  // event handlers
  function handleVehicleTypeChange(event: React.SyntheticEvent, newValue: number) {
    setVehicleType(newValue);
    setSearchParams({ [QUERY_STRINGS.VEHICLE_TYPE]: VEHICLE_TYPE_QUERY_STRINGS[newValue] });
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

      <Grid container spacing={4} justifyContent="center">
        {curPackages.map((curPackage: Package) => {
          return (
            <Grid key={curPackage.id} size={gridSize} sx={gridStyle}>
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
            </Grid>
          );
        })}

        {/* custom packages*/}
        <Grid sx={gridStyle} size={gridSize}>
          <Card sx={SERVICE_CARD_STYLE}>
            <CardContent sx={SERVICE_CARD_CONTENT_STYLE}>
              <Stack spacing={1}>
                <Typography variant="h4">{CUSTOM_PKG_TITLE}</Typography>
                <Typography variant="subtitle1">{CUSTOM_PKG_DESCRIPTION}</Typography>
                <Stack spacing={3}>
                  <MyButton buttonText={ALL_SERVICES_BTN_TXT} onClick={handleViewServicesBtn} />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
