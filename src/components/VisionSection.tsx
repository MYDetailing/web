// section with vision and contact button

import { Button, Stack, Typography } from "@mui/material";
import { VISION, NAV_BAR_SECTIONS } from "../constants/strings";
import { CONTACT_SECTION_ID } from "../constants/values";

interface Props {
  scrollToSection: (section: string) => void;
}

export default function VisionSection({ scrollToSection }: Props) {
  return (
    <>
      <Typography variant="h6">{VISION}</Typography>
      <Stack flexDirection="row" justifyContent="center" marginTop="3rem">
        <Button variant="outlined" onClick={() => scrollToSection(NAV_BAR_SECTIONS[CONTACT_SECTION_ID].TITLE)}>
          <Typography variant="h6">contact us</Typography>
        </Button>
      </Stack>
    </>
  );
}
