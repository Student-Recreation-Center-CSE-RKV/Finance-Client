import React from "react";
import Search from "../components/Search";
import { useState } from "react";
import TextFieldUtils from "../utils/VeirfyTextField";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
export default function BankDue({ triggerSnackbar, setMessage }) {
  const [data, setData] = useState({});
  const [ID, setID] = useState("");
  const getStudentByIdApi =
    process.env.REACT_APP_BASE_URL_PROTOCOL +
    process.env.REACT_APP_BASE_URL_HOST +
    process.env.REACT_APP_BASE_URL_POST +
    process.env.REACT_APP_VERSION +
    process.env.REACT_APP_GET_STUDENT_FEE_BY_ID;
  const changeData = (e) => {
    setData(e);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const toggleLoading = (state) => setIsLoading(state);
  const toggleError = (state) => setError(state);
  const getData = async () => {
    if (TextFieldUtils.textFieldCheck(ID)) {
      toggleLoading(true);
      toggleError(false);
      try {
        const response = await axios.get(getStudentByIdApi + ID);
        if (response.status === 200) {
          changeData(response.data);
          snackbarUtil(
            setMessage,
            triggerSnackbar,
            "Successfully Fetched Data",
            "success"
          );
        } else if (response.status === 404) {
          snackbarUtil(
            setMessage,
            triggerSnackbar,
            "Student not found",
            "error"
          );
          changeData({});
        } else {
          changeData({});
          snackbarUtil(setMessage, triggerSnackbar, "Internal Error", "error");
        }
      } catch (error) {
        changeData({});
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

      snackbarUtil(setMessage, triggerSnackbar, "ID required", "error");
    }
  };
  return (
    <>
      <Search
        getData={getData}
        setID={setID}
        ID={ID}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}
