import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid2,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { H6_STYLE } from "../constants/styles";
import { CSSProperties, useState } from "react";
import { BIG_BUTTON_STYLE } from "../constants/styles";
import packageData from "../data/packages.json";
import { Package } from "../types.ts";

export default function BookingPage() {


  const allPackages: Package[] = packageData.packages;

  const [selectedPackage, setSelectedPackage] = useState('0');

  function handlePackageChange(event: SelectChangeEvent) {
   setSelectedPackage(event.target.value);
  }

  const wrapperBoxStyle: CSSProperties = {
    padding: "20px 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputGroupStyle: CSSProperties = {
    marginTop: "2rem",
  };

  const gridStyle: CSSProperties = {
    border: "solid 1px white",
    borderRadius: "10px",
    padding: ".5rem",
  };

  const buttonWrapperStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  };

  const communicationMethodWrapper: CSSProperties = {
    display: "flex",
    alignItems: "center",
  };

  const formContainer = {
    width: {
      sm: "100%",
      md: "75%",
    },
  };

  return (
    <>
      <Box sx={wrapperBoxStyle}>
        <Typography variant="h4">Shine starts here</Typography>
        <Typography variant="h6" sx={H6_STYLE}>
          Enter your details to make a booking
        </Typography>

        <Box sx={formContainer}>
          <form>
            {/* Customer Information*/}
            <Box sx={inputGroupStyle}>
              <Typography variant="body1">Customer Information</Typography>
              <Grid2 sx={gridStyle} container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField label="First Name" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField label="Last Name" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField label="Phone Number" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <TextField label="Email" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={12}>
                  <Stack sx={communicationMethodWrapper} direction="row" spacing={2}>
                    <Typography>Preferred communication method </Typography>
                    <FormControl>
                      <RadioGroup row defaultValue="text">
                        <FormControlLabel value="call" control={<Radio />} label="Call" />
                        <FormControlLabel value="text" control={<Radio />} label="Text" />
                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </Grid2>
              </Grid2>
            </Box>

            {/* Vehicle Information*/}
            <Box sx={inputGroupStyle}>
              <Typography variant="body1">Vehicle Information</Typography>
              <Grid2 sx={gridStyle} container spacing={2}>
                <Grid2 size={6}>
                  <TextField label="Year" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField label="Make" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField label="Model" variant="standard" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField label="Colour" variant="standard" fullWidth />
                </Grid2>
              </Grid2>
            </Box>

            {/* Package Information*/}
            <Box sx={inputGroupStyle}>
              <Typography variant="body1">Package Information</Typography>
              <Grid2 sx={gridStyle} container spacing={2}>
                <Grid2 size={6}>
                  <Select label="Package" value={selectedPackage} onChange={handlePackageChange}>
                    {allPackages.map((curPackage: Package) => {
                      return (
                        <MenuItem value={curPackage.id} key={curPackage.name}>
                          {curPackage.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </Grid2>
              </Grid2>
            </Box>

            <Box style={buttonWrapperStyle}>
              <Button type="submit" sx={BIG_BUTTON_STYLE}>
                <Typography variant="h4">Book Online</Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
