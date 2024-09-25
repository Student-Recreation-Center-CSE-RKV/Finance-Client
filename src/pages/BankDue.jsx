import React from "react";
import Search from "../components/Search";
import { useState } from "react";
import TextFieldUtils from "../utils/VeirfyTextField";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import Header from "../components/Header";
import CustomizedGrid from "../components/CustomizedGrid";
import DueDetails from "../components/DueDetails";
import { motion } from "framer-motion";
export default function BankDue({ triggerSnackbar, setMessage }) {
  const [data, setData] = useState({});
  const [ID, setID] = useState("");
  const getStudentByIdApi =
    process.env.REACT_APP_BASE_URL_PROTOCOL +
    process.env.REACT_APP_BASE_URL_HOST +
    process.env.REACT_APP_BASE_URL_POST +
    process.env.REACT_APP_VERSION +
    process.env.REACT_APP_GET_BANK_DUE;
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
        console.log(response);
        if (response.status === 200) {
          changeData(response.data);
          console.log("bankDue",response.data)
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
      {Object.keys(data).length !== 0 && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 100,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
          >
            <Header />
            <CustomizedGrid data={data} />
            <DueDetails data={data} />
          </motion.div>
        </>
      )}
    </>
  );
}
