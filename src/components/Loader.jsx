import React from "react";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
export default function Loader() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </>
  );
}
