import { Typography, Grid2, Button, Tabs, Tab } from "@mui/material";
import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";
import { useState } from "react";

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
  services: number[];
  colour: string;
}

const services: Service[] = serviceData.services;
const packages: Package[] = packageData.packages;

function getServices(packageId: number): string[] {
  let servicesArray: string[] = [];
  packages[packageId].services.forEach((serviceIndex) => {
    servicesArray.push(services[serviceIndex].name);
  });

  return servicesArray;
}

function getHints(packageId: number): string[] {
  let hintsArray: string[] = [];
  packages[packageId].services.forEach((serviceIndex) => {
    hintsArray.push(services[serviceIndex].description);
  });

  return hintsArray;
}

function ServicesSection() {
  const [vehicleSize, setVehicleSize] = useState(1);
  function handleVehicleSizeChange(
    event: React.SyntheticEvent,
    newValue: number
  ) {
    setVehicleSize(newValue);
    console.log(newValue);
  }

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Typography variant="h6" textAlign="center">
        Vehicle size
      </Typography>
      <Tabs
        variant="fullWidth"
        value={vehicleSize}
        onChange={handleVehicleSizeChange}
        style={{ marginBottom: "1.5rem" }}
        sx={{
          "& .MuiTab-root.Mui-selected": {
            color: "#fff" ,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab label="COUPE" />
        <Tab label="SEDAN" />
        <Tab label="SUV OR MINIVAN" />
        <Tab label="SEMI TRUCK" />
      </Tabs>

      <Grid2 container rowSpacing={4} columnSpacing={4} justifyContent="center">
        {packages.map((curPackage: Package) => {
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={curPackage.id} border="4px solid #8e24aa" borderRadius="5px">
              <ServiceCard
                heading={curPackage.name}
                colour={curPackage.colour}
                description={curPackage.description}
                price={curPackage.prices[vehicleSize]}
                services={getServices(curPackage.id)}
                hints={getHints(curPackage.id)}
                previousPackage={
                  curPackage.id > 0 && curPackage.id < packages.length - 1
                    ? packages[curPackage.id - 1].name
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
