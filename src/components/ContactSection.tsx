// section witch contact and address information

import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { BOOK, ADDRESS, PHONE, HOURS, DAYS, MESSAGE, EMAIL, INSTA, PRIVACY_POLICY } from "../constants/strings";
import { GOOGLE_MAPS_LINK, INSTA_LINK, ROUTES } from "../constants/resourceLocations";

function ContactSection() {
  return (
    <Box width="100%">
      <Typography variant="h4" marginBottom=".5rem">
        {BOOK}
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        {MESSAGE}
      </Typography>
      <Stack flexDirection={{ xs: "column-reverse", md: "row" }} spacing={2} width="100%">
        <Box flex={1} p={2}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.753651216636!2d-97.9030905247761!3d49.186261077578955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c249cd6b5bc65d%3A0xd9768f2302995765!2sMY%20Detailing!5e0!3m2!1sen!2sca!4v1746057180949!5m2!1sen!2sca"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ minHeight: 400 }}
          />
        </Box>
        <Stack flex={1} p={2}>
          <Typography variant="subtitle1">{DAYS}</Typography>
          <Typography variant="subtitle1" marginBottom="1rem">
            {HOURS}
          </Typography>
          <Typography
            variant="subtitle1"
            marginBottom="1rem"
            component="a"
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ADDRESS}
          </Typography>
          <Typography variant="subtitle1" marginBottom="1rem">
            {PHONE}
          </Typography>
          <Typography variant="subtitle1" marginBottom="1rem">
            {EMAIL}
          </Typography>
          
          <Box height="2rem" />
          <Typography
            variant="subtitle1"
            marginBottom="1rem"
            component="a"
            href={INSTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {INSTA}
          </Typography>
          <Typography
            variant="subtitle1"
            marginBottom="1rem"
            component={Link}
            to={ROUTES.PRIVACY_POLICY_ROUTE}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PRIVACY_POLICY}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ContactSection;
