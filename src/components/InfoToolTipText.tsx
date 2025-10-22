// text field followed by an info icon with hint. Can use as just info icon and hint by not passing text

import { CSSProperties, useState } from "react";
import { Box, ClickAwayListener, Stack, Tooltip, Typography } from "@mui/material";

interface Props {
  tip: string;
  text?: string;
}

const infoImageStyle = {
  height: "1rem",
};

const stackStyle: CSSProperties = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const textStyle = {
  paddingRight: "5px",
};

export default function InfoToolTipText({ tip, text }: Props) {
  const [open, setOpen] = useState(false);

  function handleOpenTooltip() {
    setOpen(true);
  }

  function handleCloseTooltip() {
    setOpen(false);
  }

  const displayText = text ? text + ": " + tip : tip;

  return (
    <ClickAwayListener onClickAway={handleCloseTooltip}>
      <Tooltip
        open={open}
        onClose={handleCloseTooltip}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={displayText}
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
        <Stack sx={stackStyle}>
          <Typography variant="body1" sx={textStyle}>
            {text}
          </Typography>
          <Box />
          <img src="/info.png" style={infoImageStyle} onClick={handleOpenTooltip} />
        </Stack>
      </Tooltip>
    </ClickAwayListener>
  );
}
