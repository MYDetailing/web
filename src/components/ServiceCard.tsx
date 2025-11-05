// design of one service card, used in service section

import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { SERVICE_CARD_STYLE, SERVICE_CARD_CONTENT_STYLE } from "../constants/styles";
import InfoToolTipText from "./InfoToolTipText";

interface Props {
  heading: string;
  description: string;
  price: string;
  time: string;
  services: string[];
  hints: string[];
  previousPackage: string;
}

function ServiceCard({
  heading,
  description,
  price,
  time,
  services,
  hints,
  previousPackage,
}: Props) {
  return (
    <Card variant="outlined" sx={SERVICE_CARD_STYLE}>
      <CardContent sx={SERVICE_CARD_CONTENT_STYLE}>
        <Stack spacing={1}>
          <Typography variant="h4">
            {heading} {price == "" ? "" : "$" + price}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>

          <Box height=".25rem" />

          <Typography variant="subtitle1">{time}</Typography>
          {previousPackage !== "" && (
            <Typography variant="body1">Everything included in {previousPackage}, plus</Typography>
          )}
          <Stack>
            {services.map((service, index) => (
              <InfoToolTipText tip={hints[index]} text={service} />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
