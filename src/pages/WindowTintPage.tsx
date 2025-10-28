import { Box, Typography } from "@mui/material";

import NavBar from "../components/NavBar";

import { TINT_CAR_PNG, TINT_CAR_SM_PNG } from "../constants/resourceLocations";
import { TINT_PAGE } from "../constants/strings";

const pageContentContainerStyle = {
  paddingTop: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const carImageStyle = {
  display: {
    xs: "none",
    sm: "inline",
  },
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const carImageStyleXs = {
  display: {
    xs: "inline",
    sm: "none",
  },
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

export default function WindowTintPage() {
  return (
    <Box>
      <NavBar />
      <Box sx={pageContentContainerStyle}>
        <Typography variant="h2">{TINT_PAGE.HEADING1}</Typography>
        <Typography variant="subtitle1">{TINT_PAGE.SUBHEADING1}</Typography>
        <Box sx={carImageStyleXs} component="img" src={TINT_CAR_SM_PNG}></Box>
        <Box sx={carImageStyle} component="img" src={TINT_CAR_PNG}></Box>
      </Box>
    </Box>
  );
}
