import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import { useLocation } from "react-router-dom";
export default function Search({ getData, setID, ID, isLoading, isError }) {
  const location = useLocation();
console.log("Revanth",location.pathname)
  return (
    <div
      style={{
        padding: 1 + "rem",
        display: "flex",
        justifyContent: "center",
        marginTop: 1 + "rem",
        gap: 1 + "rem",
        alignItems: "center",
      }}
    >
      <TextField
        error={isError}
        id="outlined-textarea"
        label={
          (location.pathname === "/Student/fee" || location.pathname ===  "/edit/student") ? "Enter ID" : "Enter Due No." 
        }
        placeholder={location.pathname === "/" ? "RXXXXXX" : "XXXXXXXXX"}
        onChange={(e) => {
          setID(e.target.value);
        }}
        value={ID}
      />
      <LoadingButton
        loadingPosition="start"
        loading={isLoading}
        onClick={getData}
        startIcon={isLoading && <SaveIcon />}
        variant="contained"
      >
        Fetch Data {isLoading && "Of " + ID}
      </LoadingButton>
    </div>
  );
}
