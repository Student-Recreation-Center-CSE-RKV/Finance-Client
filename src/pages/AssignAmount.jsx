import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import TextFieldUtils from "../utils/VeirfyTextField";
import { snackbarUtil } from "../utils/SnackbarUtils";
import { Box } from "@mui/material";
import baseURL from "../utils/BaseURL";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Update } from "@mui/icons-material";
export default function AssignAmount({ triggerSnackbar, setMessage }) {
  // Attach you end point here
  const updateFeeApi = baseURL;
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isError, setError] = useState(false);
  const [batch, setBatch] = useState("");
  const [year, setYear] = useState("");
  const toggleLoading = (state) => setIsLoading(state);
  const toggleError = (state) => setError(state);
  const handleUpate = async () => {
    if (batch && year) {
      toggleLoading(true);
      toggleError(false);
      try {
        const response = await axios.get(updateFeeApi);
        console.log("Student Fee", response);
        if (response.status === 200) {
          snackbarUtil(
            setMessage,
            triggerSnackbar,
            `Successfully Updated Amount for ${batch} batch - ${year}`,
            "success"
          );
        } else if (response.status === 404) {
          snackbarUtil(
            setMessage,
            triggerSnackbar,
            `Error in updating fee for ${batch} batch - ${year}`,
            "error"
          );
        } else {
          snackbarUtil(setMessage, triggerSnackbar, "Internal Error", "error");
        }
      } catch (error) {
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          error.response.data.message,
          "error"
        );
      } finally {
        toggleLoading(false);
      }
    } else {
      toggleError(true);
      if (!batch)
        snackbarUtil(setMessage, triggerSnackbar, "Batch requried", "error");
      else snackbarUtil(setMessage, triggerSnackbar, "Year requried", "error");
    }
  };

  return (
    <>
      <Box width={"100%"}>
        <Stack direction={"row"} gap={5} sx={{ width: "100%" }} mt={3} mb={3}>
          <FormControl fullWidth>
            <InputLabel>Batch</InputLabel>
            <Select
              sx={{ width: "100%" }}
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              label="Batch"
            >
              <MenuItem value="TutionFee">PUC</MenuItem>
              <MenuItem value="HostelFee">E1</MenuItem>
              <MenuItem value="HostelFee">E2</MenuItem>
              <MenuItem value="HostelFee">E3</MenuItem>
              <MenuItem value="HostelFee">E4</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              label="Year"
            >
              {Array.from(
                { length: 2100 - 2008 + 1 },
                (_, index) => 2008 + index
              ).map((ele) => (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <LoadingButton
          sx={{
            width: "100%",
            height: "50px",
            fontSize: "1rem",
          }}
          loadingPosition="start"
          loading={isLoading}
          onClick={handleUpate}
          startIcon={isLoading && <Update />}
          variant="contained"
        >
          Allocate Amount {isLoading && "for " + batch + "-" + year}
        </LoadingButton>
      </Box>
    </>
  );
}
