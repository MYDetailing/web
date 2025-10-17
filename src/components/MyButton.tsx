// button component with an underline

import { CSSProperties } from "react";
import { Button, Typography } from "@mui/material";

import { H6_STYLE } from "../constants/styles";
import { SITE_TXT_COL } from "../constants/colors";

interface Props {
  buttonText: string;
  onClick?: (event: React.SyntheticEvent) => void;
}

const buttonStyle: CSSProperties = {
  borderRadius: "0px",
  borderBottom: `2px solid ${SITE_TXT_COL}`,
  margin: "0 auto",
};

export default function MyButton({ buttonText, onClick }: Props) {
  return (
    <Button sx={buttonStyle} onClick={onClick}>
      <Typography variant="h6" sx={H6_STYLE} textAlign={"center"}>
        {buttonText}
      </Typography>
    </Button>
  );
}
