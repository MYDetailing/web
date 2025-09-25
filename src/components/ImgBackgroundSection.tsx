// section that has rounded corners, an image background and a dark overlay.

import { Box } from "@mui/material";
import { VIDEO_OVERLAY_COL } from "../constants/colors";

const defaultSectionContainerStyle = {
  position: "relative",
  width: "100%",
};

const defaultImgStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  objectFit: "cover",
};

const defaultContentContainerStyle = {
  position: "relative",
  width: "100%",
  background: VIDEO_OVERLAY_COL,
  padding: {
    xs: "1rem",
    md: "3rem",
    lg: "3rem",
  },
};

interface props {
  containerStyle?: object;
  imgStyle?: object;
  contentContainerStyle?: object;
  imgSrc: string;
  children?: React.ReactNode;
}

export default function ImgBackgroundSection({
  containerStyle,
  imgStyle,
  contentContainerStyle,
  imgSrc,
  children,
}: props) {
  return (
    <Box sx={{ ...defaultSectionContainerStyle, ...containerStyle }}>
      <Box sx={{ ...defaultImgStyle, ...imgStyle }} component={"img"} src={imgSrc} />
      <Box sx={{ ...defaultContentContainerStyle, ...contentContainerStyle }}>{children}</Box>
    </Box>
  );
}
