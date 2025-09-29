// section that has rounded corners, an image background and a dark overlay.

import { Box } from "@mui/material";
import { IMG_OVERLAY_COL } from "../constants/colors";

const defaultSectionContainerStyle = {
  position: "relative",
  width: "100%",
  height: "100%"
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
  height: "100%",
  background: IMG_OVERLAY_COL,
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
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function ImgBackgroundSection({
  containerStyle,
  imgStyle,
  contentContainerStyle,
  imgSrc,
  onClick,
  children,
}: props) {
  const cursorStyle = {
    cursor: onClick == null ? "default" : "pointer",
  };

  return (
    <Box
      sx={{ ...defaultSectionContainerStyle, ...cursorStyle, ...containerStyle }}
      onClick={onClick}
    >
      <Box sx={{ ...defaultImgStyle, ...imgStyle }} component={"img"} src={imgSrc} />
      <Box sx={{ ...defaultContentContainerStyle, ...contentContainerStyle }}>{children}</Box>
    </Box>
  );
}
