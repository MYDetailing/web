// design of one service card, used in service section

import { Box, ClickAwayListener, Stack, Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { SERVICE_CARD_STYLE, SERVICE_CARD_CONTENT_STYLE } from "../constants/styles";

interface Props {
  heading: string;
  description: string;
  price: string;
  time: string;
  services: string[];
  hints: string[];
  previousPackage: string;
}

const infoImageStyle = {
  height: "1rem",
};

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
            {services.map((service, index) => {
              const [open, setOpen] = useState(false);

              function handleOpenTooltip() {
                setOpen(true);
              }
              0;

              function handleCloseTooltip() {
                setOpen(false);
              }

              return (
                <ClickAwayListener onClickAway={handleCloseTooltip} key={index}>
                  <Tooltip
                    open={open}
                    onClose={handleCloseTooltip}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={service + ": " + hints[index]}
                    arrow
                    placement="bottom"
                    enterDelay={500}
                    slotProps={{
                      tooltip: { sx: { fontSize: "1.2rem" } },
                      popper: {
                        modifiers: [{ name: "offset", options: { offset: [0, -14] } }],
                      },
                    }}
                  >
                    <Stack flexDirection={"row"} alignItems={"center"}>
                      <Typography variant="body1" key={index}>
                        {service}
                      </Typography>
                      <Box flexGrow={1} />

                      <img src="/info.png" style={infoImageStyle} onClick={handleOpenTooltip} />
                    </Stack>
                  </Tooltip>
                </ClickAwayListener>
              );
            })}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
