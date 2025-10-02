// page that has all the info about detailing
import { CSSProperties, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";

import ServiceCard from "../components/ServiceCard.tsx";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import {
  CARS_AND_TRUCKS_SIZES,
  QUERY_STRINGS,
  VEHICLE_TYPE_QUERY_STRINGS,
  CARS_AND_TRUCKS_SELECTOR_LABEL,
  DETAILING_PACKAGES_HEADING,
} from "../constants/strings.ts";
import {
  DEFAULT_VEHICLE_TYPE,
  FIRST_DETAILING_PACKAGE,
  LAST_DETAILING_PACKAGE,
} from "../constants/values.ts";
import { H1_H2_STYLE, SIDE_MARGIN, TOP_MARGIN, SECTION_PADDING } from "../constants/styles.ts";
import { CARD_BORDER_COL } from "../constants/colors.ts";

import { Service, Package } from "../types.ts";

import SelectorTabs from "../components/SelectorTabs.tsx";
import NavBar from "../components/NavBar.tsx";
import FallPromoSection from "../components/FallPromoSection.tsx";
import PreSalePreparationSection from "../components/PreSalePreparationSection.tsx";
import ServicesPage from "../components/AddOnsSection.tsx";

const detailingPackagesHeadingStyle = {
  ...H1_H2_STYLE,
  textAlign: "center",
  marginBottom: "3rem",
};

const contentBox = {
  paddingTop: TOP_MARGIN,
  paddingBottom: TOP_MARGIN,
  paddingLeft: SIDE_MARGIN,
  paddingRight: SIDE_MARGIN,
};

const containerGridStyle = {
  justifyContent: "center",
  marginBottom: SECTION_PADDING,
};

const gridSize = {
  xs: 12,
  sm: 6,
  lg: 4,
};

const gridStyle: CSSProperties = {
  border: `4px solid ${CARD_BORDER_COL}`,
  borderRadius: "5px",
};

const fallPromoStyle = {
  marginBottom: SECTION_PADDING,
};

const allServices: Service[] = serviceData.services;
const allPackages: Package[] = packageData.packages;

// returns an array of services for a passed package
function getServices(packageId: number): string[] {
  const servicesArray: string[] = [];

  allPackages[packageId].services.forEach((serviceIndex) => {
    servicesArray.push(allServices[serviceIndex].name);
  });

  return servicesArray;
}

// returns an array of hints for the services of a passed package
function getHints(packageId: number): string[] {
  const hintsArray: string[] = [];

  allPackages[packageId].services.forEach((serviceIndex) => {
    hintsArray.push(allServices[serviceIndex].description);
  });

  return hintsArray;
}

export default function DetailingPage() {
  // get vehicle type query string and set vehicle type
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicleTypeQueryString = searchParams.get(QUERY_STRINGS.VEHICLE_TYPE);

  const [vehicleType, setVehicleType] = useState(DEFAULT_VEHICLE_TYPE);

  const carsAndTrucksPackages = allPackages.slice(FIRST_DETAILING_PACKAGE, LAST_DETAILING_PACKAGE);

  useEffect(() => {
    if (vehicleTypeQueryString) {
      const queryStringVehicleTypeNumber =
        VEHICLE_TYPE_QUERY_STRINGS.indexOf(vehicleTypeQueryString);
      if (queryStringVehicleTypeNumber !== -1) setVehicleType(queryStringVehicleTypeNumber);
    }
  }, [vehicleTypeQueryString]);

  // event handlers
  function handleVehicleTypeChange(event: React.SyntheticEvent, newValue: number) {
    setVehicleType(newValue);
    setSearchParams(
      { [QUERY_STRINGS.VEHICLE_TYPE]: VEHICLE_TYPE_QUERY_STRINGS[newValue] },
      { replace: true }
    );
  }

  return (
    <Box>
      <NavBar />
      <Box sx={contentBox}>
        <Box sx={fallPromoStyle}>
          <FallPromoSection />
        </Box>
        <SelectorTabs
          title={CARS_AND_TRUCKS_SELECTOR_LABEL}
          selectedOption={vehicleType}
          onChange={handleVehicleTypeChange}
          allOptions={CARS_AND_TRUCKS_SIZES}
        />
        <Typography variant="h2" sx={detailingPackagesHeadingStyle}>
          {DETAILING_PACKAGES_HEADING}
        </Typography>

        <Grid container spacing={4} sx={containerGridStyle}>
          {carsAndTrucksPackages.map((curPackage: Package) => {
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
        </Grid>
        <PreSalePreparationSection vehicleType={vehicleType} />
        <ServicesPage vehicleType={vehicleType} />
      </Box>
    </Box>
  );
}
