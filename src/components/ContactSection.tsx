// section witch contact, hours and address information

import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import {
  BOOK,
  ADDRESS,
  PHONE,
  HOURS,
  DAYS,
  EMAIL,
  INSTA,
  PRIVACY_POLICY,
  TITLE,
} from "../constants/strings";
import { GOOGLE_MAPS_LINK, INSTA_LINK, ROUTES } from "../constants/resourceLocations";
import { MAP_CENTER_COORDS, MAP_PIN_COORDS, MAP_ZOOM, MAP_KEYS } from "../constants/values";
import { PURE_BLACK, PIN_COL } from "../constants/colors";

import LinkField from "./LinkFiled";
import { SIDE_MARGIN } from "../constants/styles";

const textContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `0 ${SIDE_MARGIN}`,
  width: "100%",
  boxSizing: "border-box",
};

const contactInfoStack = {
  width: "100%",
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: ".5rem",
};

const iconTextContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  marginTop: "1rem",
};

const mapStyle = {
  height: "65vh",
  width: "100%",
};

const infoWindowStyle = {
  color: PURE_BLACK,
};

export default function ContactSection() {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <div style={textContainer}>
        <Typography variant="h4">{BOOK}</Typography>
        <Typography variant="subtitle1">
          {DAYS} {HOURS}
        </Typography>
        <Stack sx={contactInfoStack}>
          <div style={iconTextContainer}>
            <LocationPinIcon />
            <LinkField href={GOOGLE_MAPS_LINK}>{ADDRESS}</LinkField>
          </div>
          <div style={iconTextContainer}>
            <PhoneIcon />
            <Typography variant="subtitle1">{PHONE}</Typography>
          </div>
          <div style={iconTextContainer}>
            <EmailIcon />
            <Typography variant="subtitle1">{EMAIL}</Typography>
          </div>
          <div style={iconTextContainer}>
            <InstagramIcon />
            <LinkField href={INSTA_LINK}>{INSTA}</LinkField>
          </div>
        </Stack>
      </div>
      <APIProvider apiKey={MAP_KEYS.apiKey}>
        <Map
          style={mapStyle}
          defaultCenter={MAP_CENTER_COORDS}
          defaultZoom={MAP_ZOOM}
          gestureHandling="cooperative"
          disableDoubleClickZoom
          mapId={MAP_KEYS.mapId}
          colorScheme="DARK"
        >
          <AdvancedMarker position={MAP_PIN_COORDS} ref={markerRef}>
            <Pin background={PIN_COL} glyphColor={PURE_BLACK} borderColor={PURE_BLACK} />
            <InfoWindow anchor={marker} style={infoWindowStyle} headerDisabled>
              {TITLE} <br /> {ADDRESS}
            </InfoWindow>
          </AdvancedMarker>
        </Map>
      </APIProvider>
      <Typography
        variant="body2"
        component={Link}
        to={ROUTES.PRIVACY_POLICY_ROUTE}
        target="_blank"
        rel="noopener noreferrer"
      >
        {PRIVACY_POLICY}
      </Typography>
    </>
  );
}
