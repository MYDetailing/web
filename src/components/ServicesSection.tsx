import {
  Typography,
  Grid2,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  Box,
} from "@mui/material";
import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import { useMemo, useState } from "react";
import { VEHICLE_TYPES } from "../constants/strings";
import {
  DEFAULT_VEHICLE_TYPE,
  FIRST_CAR_PACKAGE,
  LAST_CAR_PACKAGE,
  FIRST_SEMI_PACKAGE,
  LAST_SEMI_PACKAGE,
  FIRST_RV_PACKAGE,
} from "../constants/values";

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

const allServices: Service[] = serviceData.services;
const allPackages: Package[] = packageData.packages;

function getServices(packageId: number): string[] {
  let servicesArray: string[] = [];

  // go through passed package, and get its services
  allPackages[packageId].services.forEach((serviceIndex) => {
    servicesArray.push(allServices[serviceIndex].name);
  });

  return servicesArray;
}

function getHints(packageId: number): string[] {
  let hintsArray: string[] = [];
  allPackages[packageId].services.forEach((serviceIndex) => {
    hintsArray.push(allServices[serviceIndex].description);
  });

  return hintsArray;
}

function ServicesSection() {
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

  function handleVehicleTypeChange(
    event: React.SyntheticEvent,
    newValue: number
  ) {
    setVehicleType(newValue);
  }

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Typography variant="h6" textAlign="center">
        Vehicle type
      </Typography>
      <Box display="flex" justifyContent="center">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={vehicleType}
          onChange={handleVehicleTypeChange}
          style={{ marginBottom: "1.5rem" }}
          sx={{
            "& .MuiTab-root": {
              color: "#aaa",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#fff",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#fff",
            },
          }}
        >
          {VEHICLE_TYPES.map((tab) => {
            return <Tab label={tab} key={tab} />;
          })}
        </Tabs>
      </Box>

      <Grid2 container rowSpacing={4} columnSpacing={4} justifyContent="center">
        {curPackages.map((curPackage: Package) => {
          return (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4 }}
              key={curPackage.id}
              border="4px solid #8e24aa"
              borderRadius="5px"
            >
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
                  curPackage.previousServiceLabel
                    ? allPackages[curPackage.id - 1].name
                    : ""
                }
              />
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}

export default ServicesSection;
