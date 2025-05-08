// navigation bar at the top of the site

import { AppBar, Button, Toolbar } from "@mui/material";
import { TITLE } from "../constants/strings";
import { NAV_BAR_COL } from "../constants/colors";
import { CSSProperties } from "react";

interface Props {
  sections: string[];
  onSectionChange: (section: string) => void;
  activeSection: String;
}

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

export default function NavBar({
  sections,
  onSectionChange,
  activeSection,
}: Props) {
  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolBarStyle}>
        <img src="/logofull.png" alt={TITLE} style={logoStyle} />
        <div>
          {sections.map((section) => (
            <Button
              key={section}
              color={activeSection === section ? "secondary" : "inherit"}
              onClick={() => onSectionChange(section)}
            >
              {section}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
