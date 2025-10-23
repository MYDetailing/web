import { useRef } from "react";
import { Box } from "@mui/material";

import NavBar from "../components/NavBar";

import { TINT_CAR_PNG } from "../constants/resourceLocations";

const imageContainerStyle = {
  width: "100%",
  height: "100vh",
  scrollBehavior: "smooth",
  overflowX: "scroll",
};

const carImageStyle = {
  width: {
    xs: "auto",
    lg: "100%",
  },
  height: "100vh",
  objectFit: "cover",
  objectPosition: "left",
};

export default function WindowTintPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  function handleWheel(e: React.WheelEvent) {
    const container = containerRef.current;
    if (container) {
      e.preventDefault();

      container.scrollLeft += e.deltaY * 25;
    }
  }

  return (
    <Box>
      <NavBar />
      <Box sx={imageContainerStyle} ref={containerRef} onWheel={handleWheel}>
        <Box sx={carImageStyle} component="img" src={TINT_CAR_PNG}></Box>
      </Box>
    </Box>
  );
}
