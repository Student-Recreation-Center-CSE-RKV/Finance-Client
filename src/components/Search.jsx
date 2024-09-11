import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
export default function Search({ triggerSnackbar, setMessage }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [id, setId] = useState("");
  const toggleLoadingTrue = () => {
    setIsLoading(true);
  };
  const toggleLoadingFalse = () => {
    setIsLoading(false);
  };
  const toggleErrorTrue = () => {
    setError(true);
  };
  const toggleErrorFalse = () => {
    setError(false);
  };
  const getData = () => {
    toggleErrorTrue();
    toggleLoadingTrue();
    triggerSnackbar();
    setMessage("Fetching data");
  };

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
        label="Enter ID"
        placeholder="RXXXXXX"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
      />
      <LoadingButton
        loadingPosition="start"
        loading={isLoading}
        onClick={getData}
        startIcon={isLoading && <SaveIcon />}
        variant="contained"
      >
        Fetch Data {isLoading && "Of " + id}
      </LoadingButton>
    </div>
  );
}
