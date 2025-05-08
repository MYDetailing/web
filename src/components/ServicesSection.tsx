import { Typography, Grid2, Tabs, Tab, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import { CSSProperties, useMemo, useState } from "react";
import { VEHICLE_TYPES } from "../constants/strings";
import {
  DEFAULT_VEHICLE_TYPE,
  FIRST_CAR_PACKAGE,
  LAST_CAR_PACKAGE,
  FIRST_SEMI_PACKAGE,
  LAST_SEMI_PACKAGE,
  FIRST_RV_PACKAGE,
} from "../constants/values";
import { H6_STYLE } from "../constants/theme";
import { CARD_BORDER_COL, SITE_TXT_COL, UNSELECTED_COL} from "../constants/colors";

interface Service {
  id: number;
  name: string;
  description: string;
}

interface Package {
  id: number;
  name: string;
  description: string;
  prices: string[];
  time: string;
  previousServiceLabel: boolean;
  services: number[];
}

const wrapperBoxStyle: CSSProperties = {
  maxWidth: "100%",
};

const tabsStyle = {
  "& .MuiTab-root": {
    color: UNSELECTED_COL,
  },
  "& .MuiTab-root.Mui-selected": {
    color: SITE_TXT_COL,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: SITE_TXT_COL,
  },
  marginBottom: "1.5rem",
};

const gridStyle: CSSProperties = {
  border: `4px solid ${CARD_BORDER_COL}`,
  borderRadius: "5px",
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

  return (
    <Box sx={wrapperBoxStyle}>
      <Typography variant="h6" textAlign="center" sx={H6_STYLE}>
        Vehicle type
      </Typography>
      <Box display="flex" justifyContent="center">
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          value={vehicleType}
          onChange={handleVehicleTypeChange}
          sx={tabsStyle}
        >
          {VEHICLE_TYPES.map((tab) => {
            return <Tab label={tab} key={tab} />;
          })}
        </Tabs>
      </Box>

      <Grid2 container rowSpacing={4} columnSpacing={4} justifyContent="center">
        {curPackages.map((curPackage: Package) => {
          return (
            <Grid2 key={curPackage.id} size={{ xs: 12, sm: 6, md: 4 }} sx={gridStyle}>
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
      </Grid2>
    </Box>
  );
}
