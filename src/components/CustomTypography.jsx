import React from "react";
import { Typography } from "@mui/material";
export default function CustomTypography({ data }) {
  return (
    <>
      <Typography
        variant="h6"
        align="center"
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        {data}
      </Typography>
    </>
  );
}
