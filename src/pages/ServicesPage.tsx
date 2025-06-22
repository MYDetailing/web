// page that shows all services and add-ons

import { CSSProperties, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { SERVICE_CATEGORIES } from "../constants/strings.ts";
import { CAR_TYPES } from "../constants/strings.ts";
import { H6_STYLE } from "../constants/styles.ts";
import { DEFAULT_VEHICLE_TYPE } from "../constants/values.ts";

import SelectorTabs from "../components/SelectorTabs.tsx";
import InfoToolTip from "../components/InfoToolTipText.tsx";

import serviceData from "../data/services.json";
import { Service } from "../types.ts";
import { PURE_WHITE } from "../constants/colors.ts";

const allServices: Service[] = serviceData.services;

const wrapperBoxStyle: CSSProperties = {
  padding: "20px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconCellStyle: CSSProperties = {
  width: "32px",
};

const iconStyle: CSSProperties = {
  color: PURE_WHITE,
};

const collapsableCellStyle: CSSProperties = { borderBottom: 0 };

const descriptionCellStyleDesktop = {
  display: {
    xs: "none",
    sm: "table-cell",
  },
};

const descriptionCellStyleMobile = {
  display: {
    xs: "table-cell",
    sm: "none",
  },
};

export default function ServicesPage() {
  // create a 2D array of services, where the services are split into interior, exterior and restoration
  const servicesToShow: Service[][] = [];
  SERVICE_CATEGORIES.forEach((serviceCategory) => {
    servicesToShow.push(allServices.filter((service) => service.category == serviceCategory));
  });

  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(Array(3).fill(false));

  const [vehicleType, setVehicleType] = useState(DEFAULT_VEHICLE_TYPE);

  function handleVehicleTypeChange(event: React.SyntheticEvent, newValue: number) {
    setVehicleType(newValue);
  }

  function toggleSectionExpansion(index: number) {
    setVisibleCategories((prev) => prev.map((val, i) => (i === index ? !val : val)));
  }

  return (
    <Box sx={wrapperBoxStyle}>
      <Typography variant="h4">Add-Ons</Typography>
      <Typography variant="h6" sx={H6_STYLE}>
        Add these options to any package—or combine them to build your own.
      </Typography>

      <Box height={"2rem"} />

      <SelectorTabs
        title={"Vehicle Type"}
        selectedOption={vehicleType}
        onChange={handleVehicleTypeChange}
        allOptions={CAR_TYPES}
      />

      <Table>
        <TableBody>
          {servicesToShow.map((services: Service[], index) => (
            <>
              {/* Category row */}
              <TableRow>
                <TableCell sx={iconCellStyle}>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => toggleSectionExpansion(index)}
                  >
                    {visibleCategories[index] ? (
                      <KeyboardArrowUpIcon sx={iconStyle} />
                    ) : (
                      <KeyboardArrowDownIcon sx={iconStyle} />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell onClick={() => toggleSectionExpansion(index)}>
                  <Typography>{services[0].category}</Typography>
                </TableCell>
              </TableRow>
              {/* Category row end */}

              {/* Collapsable row */}
              <TableRow>
                <TableCell sx={collapsableCellStyle} colSpan={6}>
                  <Collapse key={services[0].category} in={visibleCategories[index]}>
                    <Box>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Service</TableCell>
                            <TableCell sx={descriptionCellStyleDesktop}>Description</TableCell>
                            <TableCell sx={descriptionCellStyleMobile}></TableCell>
                            <TableCell align="right">Prices</TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {services.map((service) => (
                            <TableRow key={service.id}>
                              <TableCell>{service.name}</TableCell>
                              <TableCell sx={descriptionCellStyleDesktop}>
                                {service.description}
                              </TableCell>
                              <TableCell sx={descriptionCellStyleMobile}>
                                <InfoToolTip tip={service.name + ": " + service.description} />
                              </TableCell>
                              <TableCell align="right">
                                {service.prices?.[vehicleType] ?? ""}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              {/* Collapsable row end */}
            </>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}