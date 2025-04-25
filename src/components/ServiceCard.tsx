import {Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface Props {
  heading: string;
  description: string;
  colour: string;
  prices: string;
  services: string[];
  hints: string[];
  previousPackage: string
}

function ServiceCard({
  heading,
  description,
  colour,
  prices,
  services,
  hints,
  previousPackage
}: Props) {


  return ( 
  <Card variant="outlined" sx={{backgroundColor: 'transparent', border: `5px solid ${colour}`,
  borderRadius: '12px', color: 'white', height: '100%'}}>
    <CardContent>
    <Typography variant="h4" style={{ fontFamily: 'Elemental'}}>{heading}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Typography variant="body2">{prices}</Typography>
      {previousPackage !== '' && (<Typography>Everything included in {previousPackage} </Typography>)}
      {services.map((service, index) => {
        return <Typography key={index}>{service}</Typography>;
      })}
    </CardContent>
  </Card>
  );
}

export default ServiceCard;
