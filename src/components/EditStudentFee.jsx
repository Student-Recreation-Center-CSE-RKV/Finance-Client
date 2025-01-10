import React, { useState, useEffect } from "react";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import Search from "./Search";
import VerifyTextField from "../utils/VeirfyTextField";
import {
  Stack,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

export default function EditStudentDetails({ setMessage, triggerSnackbar }) {
  const [studentID, setStudentID] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchStudentData = async () => {
    if (!VerifyTextField.textFieldCheck(studentID)) {
      setIsError(true);
      snackbarUtil(setMessage, triggerSnackbar, "Enter ID", "error");
      return;
    }
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(
        `http://localhost:3001/api/v1/student/${studentID}`
      );
      setStudentData(response.data.student);
      setEditData(response.data.student);
      const updatedAmount = {
        ...response.data.student,
        Amount: 0,
      };

      setStudentData(updatedAmount);
      setEditData(updatedAmount);
      setIsModified(false);
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Successfully Fetched Data",
        "success"
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching student data", error);
      snackbarUtil(setMessage, triggerSnackbar, error.message, "error");
      setIsLoading(false);
    }
  };

  const handleEdit = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  useEffect(() => {
    if (studentData && editData) {
      const isChanged = Object.keys(studentData).some(
        (key) => studentData[key] !== editData[key]
      );
      setIsModified(isChanged);
    }
  }, [editData, studentData]);

  const saveStudentFeeData = async () => {
    try {
      setIsLoading(true);
      // Call API here to upadte Fee Data
      //   await axios.put(
      //     `http://localhost:3001/api/v1/update/student/${studentID}`,
      //     editData
      //   );

      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Student data updated successfully!",
        "success"
      );
      setIsModified(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating student data", error);

      let errorMessage = "Error updating student data";

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      snackbarUtil(
        setMessage,
        triggerSnackbar,
        `Update failed: ${errorMessage}`,
        "error"
      );
      setIsLoading(false);
    }
  };

  return (
    <Box width={"100%"}>
      <Stack>
        <Search
          getData={fetchStudentData}
          setID={setStudentID}
          ID={studentID}
          isLoading={isLoading}
          isError={isError}
          text="Enter Student ID"
          placeholder="RXXXXXX"
        />
      </Stack>

      {studentData && (
        <TableContainer component={Paper} style={{ marginTop: "40px" }}>
          <Typography
            variant="h6"
            align="center"
            m={3}
            sx={{ fontWeight: "bold" }}
          >
            Edit Student Total Fee
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="student details table">
            <TableBody>
              {[
                { label: "ID", value: editData.ID, readOnly: true },
                {
                  label: "Amount",
                  value: editData.Amount,
                  type: "number",
                  field: "Amount",
                },
                {
                  label: "Proof",
                  value: editData.Category,
                  type: "file",
                  field: "Proof",
                },
              ].map((field, index) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>
                    {field.label}
                  </TableCell>
                  <TableCell>
                    {field.type === "file" ? (
                      <input
                        required
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          field.field &&
                          handleEdit(field.field, e.target.files[0] || null)
                        }
                        fullWidth
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                        }}
                      />
                    ) : (
                      <TextField
                        value={field.value || ""}
                        onChange={(e) =>
                          field.field && handleEdit(field.field, e.target.value)
                        }
                        fullWidth
                        InputProps={field.readOnly ? { readOnly: true } : {}}
                        disabled={field.readOnly}
                        sx={
                          field.readOnly
                            ? {
                                backgroundColor: "#f0f0f0",
                                borderRadius: "5px",
                              }
                            : {}
                        }
                        type={field.type || "text"}
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "30px", height: "50px", fontSize: "1rem" }}
              onClick={saveStudentFeeData}
              disabled={!isModified}
            >
              Save Changes
            </Button>
          </Stack>
        </TableContainer>
      )}
    </Box>
  );
}
