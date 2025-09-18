// section witch contact and address information

import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";

import {
  BOOK,
  ADDRESS,
  PHONE,
  HOURS,
  DAYS,
  MESSAGE,
  EMAIL,
  INSTA,
  PRIVACY_POLICY,
} from "../constants/strings";
import { GOOGLE_MAPS_LINK, INSTA_LINK, ROUTES } from "../constants/resourceLocations";

const contactStackStyle = {
  display: "flex",
  alignItems: "center"
}

function ContactSection() {

  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <Box width="100%" marginTop={"2rem"}>
      <Typography variant="h4" marginBottom=".5rem">
        {BOOK}
      </Typography>
      <Typography variant="subtitle1" textAlign="center">
        {MESSAGE}
      </Typography>
      <Stack flexDirection={{ xs: "column-reverse"}} spacing={2} width="100%">
          <APIProvider apiKey={"AIzaSyAaFzp0qrdoir2g4UCGzmILkbg2h9WR4Tk"}>
            <Map
              style={{ width: "100%", height: "65vh" }}
              defaultCenter={{ lat: 49.18658013916143, lng: -97.90660958222898 }}
              defaultZoom={14.5}
              gestureHandling="cooperative"
              disableDoubleClickZoom
              mapId={"889ee0e8bb28145df95e7afd"}
              colorScheme="DARK"
            >
                <AdvancedMarker position={{lat: 49.18641181597199, lng: -97.90053704988956}} title={"MYDetailing"} ref={markerRef}>
                      <Pin background={'#545454ff'} glyphColor={'#000'} borderColor={'#000'} />
                            <InfoWindow anchor={marker} style={{color: "#000"}} headerDisabled>MY Detailing <br/>5-542 Icon Dr. Winkler</InfoWindow>
                </AdvancedMarker>

            </Map>
          </APIProvider>
        <Stack sx={contactStackStyle}>
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
        </Stack>
      </Stack>
      <Typography
        variant="body2"
        component={Link}
        to={ROUTES.PRIVACY_POLICY_ROUTE}
        target="_blank"
        rel="noopener noreferrer"
      >
        {PRIVACY_POLICY}
      </Typography>
    </Box>
  );
}

export default ContactSection;
