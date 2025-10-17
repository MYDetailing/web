// titled tab selector

import { CSSProperties } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import { SITE_TXT_COL, UNSELECTED_COL } from "../constants/colors";

interface Props {
  title: string;
  selectedOption: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  allOptions: string[];
}

const tabsStyle = {
  "& .MuiTab-root": {
    color: UNSELECTED_COL,
  },
  "& .MuiTab-root.Mui-selected": {
    color: SITE_TXT_COL,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: SITE_TXT_COL,
  },
  marginBottom: "1.5rem",
};

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default function SelectorTabs({ title, selectedOption, onChange, allOptions }: Props) {
  return (
    <>
      <Typography variant="h6" textAlign="center">
        {title}
      </Typography>

      <Box sx={boxStyle}>
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          value={selectedOption}
          onChange={onChange}
          sx={tabsStyle}
        >
          {allOptions.map((tab) => {
            return <Tab label={tab} key={tab} />;
          })}
        </Tabs>
      </Box>
    </>
  );
}
