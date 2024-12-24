import React from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Stack } from "@mui/material";

export default function Search({
  text = "Enter Id",
  getData,
  setID,
  ID,
  isLoading,
  isError,
  placeholder = "RXXXXXX",
}) {
  return (
    <Box width={"100%"}>
      <Stack direction={"row"} gap={5}>
        <TextField
          sx={{ width: "100%" }}
          error={isError}
          id="outlined-textarea"
          label={text}
          placeholder={placeholder}
          value={ID}
          onChange={(e) => {
            setID(e.target.value);
          }}
        />
        <LoadingButton
          sx={{ width: "50%" }}
          loadingPosition="start"
          loading={isLoading}
          onClick={getData}
          startIcon={isLoading && <SaveIcon />}
          variant="contained"
        >
          Fetch Data {isLoading && "Of " + ID}
        </LoadingButton>
      </Stack>
    </Box>
  );
}
