// page that shows all services and add-ons
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import serviceData from "../data/services.json";
import { Service } from "../types.ts";
import { H6_STYLE } from "../constants/styles.ts";

const allServices: Service[] = serviceData.services;

export default function ServicesPage() {
    const servicesToShow: Service[] = allServices.filter(
        (service) => service.category != undefined
    );
    return (
        <Box padding="20px 10px" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4">
                Add-Ons
            </Typography>
            <Typography variant="h6" sx={H6_STYLE}>
                Add these options to any package—or combine them to build your own.
            </Typography>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Service</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Prices (Sedan/SUV/Pickup)</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    servicesToShow.map((service) => (
                        <TableRow>
                            <TableCell>{service.name}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell align="right">{service.prices?.join("/")}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>
        </Box>

    );
}