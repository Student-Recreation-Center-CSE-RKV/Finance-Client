import React, { useState, useEffect } from "react";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import Search from "../components/Search";
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

export default function StudentEdit({ setMessage, triggerSnackbar }) {
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

  const saveStudentData = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `http://localhost:3001/api/v1/update/student/${studentID}`,
        editData
      );

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
            Edit Student Details
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="student details table">
            <TableBody>
              {[
                { label: "ID", value: editData.ID, readOnly: true },
                {
                  label: "Student Name",
                  value: editData.StudentName,
                  field: "StudentName",
                },
                { label: "Gender", value: editData.Gender, field: "Gender" },
                {
                  label: "Category",
                  value: editData.Category,
                  field: "Category",
                },
                {
                  label: "Father's Name",
                  value: editData.FatherName,
                  field: "FatherName",
                },
              ].map((field, index) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>
                    {field.label}
                  </TableCell>
                  <TableCell>
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
                          ? { backgroundColor: "#f0f0f0", borderRadius: "5px" }
                          : {}
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack>
            <Button
              variant="contained"
              sx={{
                margin: "20px",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              onClick={saveStudentData}
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
