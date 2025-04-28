import { Box, Stack, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { semanticColors } from "@nextui-org/react";
import { tr } from "framer-motion/client";
import { useState } from "react";
import { setupIntersectionMocking } from "react-intersection-observer/test-utils";

interface Props {
  heading: string;
  description: string;
  colour: string;
  prices: string;
  services: string[];
  hints: string[];
  previousPackage: string;
}

function ServiceCard({
  heading,
  description,
  colour,
  prices,
  services,
  hints,
  previousPackage,
}: Props) {

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "transparent",
        border: `5px solid ${colour}`,
        borderRadius: "12px",
        color: "white",
        height: "100%",
      }}
    >
      <CardContent>
        <Stack>
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="subtitle2">{prices}</Typography>
        <Typography variant="subtitle1">{description}</Typography>

        <Box height=".5rem" />

        {previousPackage !== "" && (
          <Typography fontStyle={"italic"}>Everything included in {previousPackage}, plus</Typography>
        )}
        {services.map((service, index) => {
          
          const [open, setOpen] = useState(false);

          function handleOpenTooltip() {
            setOpen(true);
          }

          function handleCloseTooltip() {
            setOpen(false);
          }

          return (
            <Tooltip open={open} onOpen={handleOpenTooltip} onClose={handleCloseTooltip} disableFocusListener
            title={hints[index]} key={index} arrow placement="bottom" enterDelay={500} slotProps={{
              tooltip: {sx: {fontSize: "1.2rem"}}
            }}>
            <Stack flexDirection={"row"} key={index} alignItems={"center"}>
            <Typography variant="body1" key={index}>{service}</Typography>
            <Box flexGrow={1} />
            <img src="/info.png" style={{ height: "1rem" }} key={index} onClick={handleOpenTooltip}/>
            </Stack>
            </Tooltip>
          );
        })}
      </Stack>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
