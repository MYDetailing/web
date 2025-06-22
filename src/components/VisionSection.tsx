// section with vision and contact button

import { Button, Stack, Typography } from "@mui/material";
import { VISION, NAV_BAR_SECTIONS } from "../constants/strings";
import { H6_STYLE } from "../constants/styles";

interface Props {
  scrollToSection: (section: string) => void;
}

export default function VisionSection({ scrollToSection }: Props) {
  return (
    <>
      <Typography variant="h6" sx={H6_STYLE}>
        {VISION}
      </Typography>
      <Stack flexDirection="row" justifyContent="center" marginTop="3rem">
        <Button variant="outlined" onClick={() => scrollToSection(NAV_BAR_SECTIONS[1])}>
          <Typography variant="h6" sx={H6_STYLE}>
            contact us
          </Typography>
        </Button>
      </Stack>
    </>
  );
}
