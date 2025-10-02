// sections that shows all the services and add-ons

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
import { H4_STYLE, H6_STYLE, SECTION_PADDING } from "../constants/styles.ts";

import InfoToolTip from "./InfoToolTipText.tsx";

import serviceData from "../data/services.json";
import { Service } from "../types.ts";
import { PURE_WHITE } from "../constants/colors.ts";

const allServices: Service[] = serviceData.services;

const containerBoxStyle: CSSProperties = {
  marginTop: SECTION_PADDING,
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

interface Props {
  vehicleType: number;
}

export default function ServicesPage({ vehicleType }: Props) {
  const servicesToShow: Service[][] = [];
  const numberOfCategories = SERVICE_CATEGORIES.length;

  // create a 2D array of services, where the services are split into interior, exterior and restoration
  SERVICE_CATEGORIES.forEach((serviceCategory) => {
    servicesToShow.push(allServices.filter((service) => service.category == serviceCategory));
  });

  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(
    Array(numberOfCategories).fill(false)
  );

  function toggleSectionExpansion(index: number) {
    setVisibleCategories((prev) => prev.map((val, i) => (i === index ? !val : val)));
  }

  return (
    <Box sx={containerBoxStyle}>
      <Typography variant="h4" sx={H4_STYLE}>
        Add-Ons
      </Typography>
      <Typography variant="h6" sx={H6_STYLE}>
        Add these options to any package—or combine them to build your own.
      </Typography>

      <Box height={"2rem"} />

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
                            <TableCell align="right">Price</TableCell>
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
