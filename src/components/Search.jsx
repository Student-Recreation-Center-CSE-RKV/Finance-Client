import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import TextFieldUtils from "../utils/VeirfyTextField";
import axios from "axios";
export default function Search({ triggerSnackbar, setMessage, changeData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [id, setId] = useState("");
  const getStudentByIdApi =
    process.env.REACT_APP_BASE_URL_PROTOCOL +
    process.env.REACT_APP_BASE_URL_HOST +
    process.env.REACT_APP_BASE_URL_POST +
    process.env.REACT_APP_VERSION +
    process.env.REACT_APP_GET_STUDENT_FEE_BY_ID;
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
  const getData = async () => {
    if (TextFieldUtils.textFieldCheck(id)) {
      toggleLoadingTrue();
      toggleErrorFalse();
      try {
        const response = await axios.get(getStudentByIdApi + id);
        if (response.status === 200) {
          changeData(response.data);
          triggerSnackbar();

          setMessage({
            msg: "Successfully Fetched Data",
            type: "success",
          });
          toggleLoadingFalse();
        } else if (response.status === 404) {
          triggerSnackbar();

          setMessage({
            msg: "Student not found",
            type: "error",
          });
          changeData({});
          toggleLoadingFalse();
        } else {
          triggerSnackbar();
          changeData({});

          setMessage({
            msg: "Internal Error",
            type: "error",
          });
          toggleLoadingFalse();
        }
      } catch (error) {
        changeData({});
        triggerSnackbar();
        setMessage({
          msg: error.response.data.message,
          type: "error",
        });
        toggleLoadingFalse();
      }
    } else {
      toggleErrorTrue();
      triggerSnackbar();
      setMessage({
        msg: "ID required",
        type: "error",
      });
    }
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
