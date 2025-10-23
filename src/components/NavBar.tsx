// navigation bar at the top of the site
import { CSSProperties } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

import { TITLE } from "../constants/strings";
import { NAV_BAR_COL } from "../constants/colors";
import { NAV_BAR_SECTIONS } from "../constants/strings";
import { LOGO_FULL_PNG, ROUTES } from "../constants/resourceLocations";
import { useNavigate } from "react-router-dom";

const appBarStyle: CSSProperties = {
  backgroundColor: NAV_BAR_COL,
};

const toolBarStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const logoStyle: CSSProperties = {
  height: "40px",
};

const desktopMenuButtonsStyle = {
  display: {
    xs: "none",
    sm: "inline",
  },
};

const mobileMenuButtonsStyle = {
  display: {
    xs: "inline",
    sm: "none",
  },
};

export default function NavBar() {
  const navigate = useNavigate();

  const mobileMenuItems = NAV_BAR_SECTIONS.filter((section) => {
    return section.MOBILE;
  });

  function onLogoClick() {
    navigate(ROUTES.HOME);
  }

  function onSectionChange(sectionUrl: string) {
    navigate(sectionUrl);
  }

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <img src={LOGO_FULL_PNG} alt={TITLE} style={logoStyle} onClick={onLogoClick} />
        <Box sx={desktopMenuButtonsStyle}>
          {NAV_BAR_SECTIONS.map((section) => (
            <Button
              key={section.TITLE}
              color={"inherit"}
              onClick={() => onSectionChange(section.PATH)}
            >
              {section.TITLE}
            </Button>
          ))}
        </Box>
        <Box sx={mobileMenuButtonsStyle}>
          {mobileMenuItems.map((section) => (
            <Button
              key={section.TITLE}
              color={"inherit"}
              onClick={() => onSectionChange(section.PATH)}
            >
              {section.TITLE}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
