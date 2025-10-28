// a text filed that opens the passed link in a new tab

import { Typography } from "@mui/material";

interface Props {
  href: string;
  sx?: object;
  children: React.ReactNode;
}

export default function LinkField({ href, sx, children }: Props) {
  return (
    <Typography variant="subtitle1" sx={sx} component="a" href={href} target="_blank">
      {children}
    </Typography>
  );
}
