import React, { useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header2";
import StudentDetails from "../components/StudentDetails";
import FeeDetails from "../components/FeeDetails";
import CustomizedGrid from "../components/CustomizedGrid";
import TextFieldUtils from "../utils/VeirfyTextField";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import StudentChart from "../components/StudentChart";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
export default function StudentFee({ triggerSnackbar, setMessage }) {
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
        console.log("Student Fee", response);
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
      <Box width={"100%"}>
        <Search
          getData={getData}
          setID={setID}
          ID={ID}
          isLoading={isLoading}
          isError={isError}
          text="Enter Student ID"
          placeholder="RXXXXXX"
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
              <Header data={data.student.student}/>
              <StudentDetails data={data.student.student} />
              <FeeDetails data={data} />

              {data?.tutionFee && data?.hostelFee && (
                <StudentChart data={data} />
              )}
            </motion.div>
          </>
        )}
      </Box>
    </>
  );
}
