import { Typography, Grid2 } from "@mui/material";
import ServiceCard from "./ServiceCard";
import serviceData from "../data/services.json";
import packageData from "../data/packages.json";

interface Service {
  id: number;
  name: string;
  description: string;
}

interface Package {
  id: number;
  name: string;
  description: string;
  prices: string;
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

function ServicesSection() {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '2rem 1rem' }}>
      <Typography variant="h3" gutterBottom>
        Services
      </Typography>

      <Grid2 container rowSpacing={4} columnSpacing={4} justifyContent='center'>
      {packages.map((curPackage: Package) => {
        return (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={curPackage.id}>
          <ServiceCard
            heading={curPackage.name}
            colour={curPackage.colour}
            description={curPackage.description}
            prices={curPackage.prices}
            services={getServices(curPackage.id)}
            hints={[]}
            previousPackage={curPackage.id > 0 && curPackage.id < (packages.length - 1)? packages[curPackage.id-1].name : ''}
          />
          </Grid2>
        );
      })}
      </Grid2>
      
    </div>
  );
}

export default ServicesSection;
