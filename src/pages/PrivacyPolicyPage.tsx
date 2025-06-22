// page that displays the privacy policy

import { CSSProperties, useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { PRIVACY_POLICY_TXT } from "../constants/resourceLocations";

const textStyle: CSSProperties = {
    whiteSpace: "pre-line"
};

export default function PrivacyPolicyPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(PRIVACY_POLICY_TXT)
      .then((res) => res.text())
      .then(setText)
      .catch((err) => setText("Failed to load policy."));
  }, []);

  return (
    <>
      <Typography sx={textStyle}>{text}</Typography>
    </>
  );
}