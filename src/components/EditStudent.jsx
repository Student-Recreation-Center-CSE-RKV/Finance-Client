import React, { useState, useEffect } from "react";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const StudentEdit = ({setMessage,triggerSnackbar}) => {
  const [studentID, setStudentID] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isModified, setIsModified] = useState(false); // Track if any changes were made

  // Function to fetch student data
  const fetchStudentData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/student/${studentID}`
      );
      setStudentData(response.data.student);
      setEditData(response.data.student); // Set fetched data to editable data
      setIsModified(false); // Reset change tracking
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Successfully Fetched Data",
        "success"
      );
    } catch (error) {
      console.error("Error fetching student data", error);
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Student Not Found",
        "error"
      );
    }
  };

  // Function to handle field edits and track changes
  const handleEdit = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  // Compare the original student data with edited data to track changes
  useEffect(() => {
    if (studentData && editData) {
      const isChanged = Object.keys(studentData).some(
        (key) => studentData[key] !== editData[key]
      );
      setIsModified(isChanged);
    }
  }, [editData, studentData]); // Trigger when editData or studentData changes

  // Function to save the updated student data
  const saveStudentData = async () => {
    try {
      console.log(editData);
      alert("Student data updated successfully!");
      setIsModified(false); // Reset change tracking after saving
    } catch (error) {
      console.error("Error updating student data", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Search field and button */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px", gap: "10px" }}>
        <TextField
          label="Enter Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          variant="outlined"
          size="small"
        />
        <Button variant="contained" color="primary" onClick={fetchStudentData}>
          Fetch Data
        </Button>
      </div>

      {/* Display and edit student data */}
      {studentData && (
        <TableContainer component={Paper} style={{ marginTop: "40px", width: "60%" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}
          >
            Edit Student Details
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="student details table">
            <TableBody>
              {[
                { label: "ID", value: editData.ID, readOnly: true },
                { label: "Student Name", value: editData.StudentName, field: "StudentName" },
                { label: "Gender", value: editData.Gender, field: "Gender" },
                { label: "Category", value: editData.Category, field: "Category" },
                { label: "Father's Name", value: editData.FatherName, field: "FatherName" },
                { label: "BATCH", value: editData.BATCH, field: "BATCH" },
              ].map((field, index) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>{field.label}</TableCell>
                  <TableCell>
                    <TextField
                      value={field.value || ""}
                      onChange={(e) => field.field && handleEdit(field.field, e.target.value)}
                      fullWidth
                      InputProps={field.readOnly ? { readOnly: true } : {}}
                      disabled={field.readOnly}
                      sx={field.readOnly ? { backgroundColor: "#f0f0f0", borderRadius: "5px" } : {}}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* Centered Save Changes Button */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button
              variant="contained"
              sx={{
                margin: "20px",
                backgroundColor: "green", // Set the button's background color to green
                "&:hover": {
                  backgroundColor: "darkgreen", // Change background color on hover
                },
              }}
              onClick={saveStudentData}
              disabled={!isModified} // Disable if no changes made
            >
              Save Changes
          </Button>

          </div>
        </TableContainer>
      )}
    </div>
  );
};

export default StudentEdit;
