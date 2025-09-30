// navigation bar at the top of the site
import { CSSProperties } from "react";
import { AppBar, Button, Toolbar } from "@mui/material";

import { TITLE } from "../constants/strings";
import { NAV_BAR_COL } from "../constants/colors";
import { NAV_BAR_SECTIONS } from "../constants/strings";
import { LOGO_FULL_PNG, ROUTES } from "../constants/resourceLocations";
import { useNavigate } from "react-router-dom";
import { CONTACT_SECTION_ID } from "../constants/values";

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

export default function NavBar() {
  const navigate = useNavigate();

  function onLogoClick() {
    navigate(ROUTES.HOME);
  }

  function onSectionChange(section: string) {
    if (section == NAV_BAR_SECTIONS[CONTACT_SECTION_ID]) {
      navigate("/#contact");
    } else {
      navigate(`/${section}`);
    }
  }

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <img src={LOGO_FULL_PNG} alt={TITLE} style={logoStyle} onClick={onLogoClick} />
        <div>
          {NAV_BAR_SECTIONS.map((section) => (
            <Button key={section} color={"inherit"} onClick={() => onSectionChange(section)}>
              {section}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
