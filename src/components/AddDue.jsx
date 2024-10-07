import React, { useState } from "react";
import axios from "axios";
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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { snackbarUtil } from "../utils/SnackbarUtils";

const StudentEdit = ({ setMessage, triggerSnackbar }) => {
  const [studentID, setStudentID] = useState("");
  const [studentData, setStudentData] = useState(null);

  // Formik initial values and validation schema
  const formik = useFormik({
    initialValues: {
      amount: "",
      dueNumber: "",
      date: "",
      proof: null,
      feeType: "tuition", // Default value for the radio button
    },
    validationSchema: Yup.object({
      amount: Yup.number().required("Amount is required"),
      dueNumber: Yup.string().required("Due Number is required"),
      date: Yup.date().required("Date is required"),
      proof: Yup.mixed().required("Proof is required"),
      feeType: Yup.string().required("Fee Type is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("Amount", values.amount);
      formData.append("ReceiptNo", values.dueNumber);
      formData.append("Date", values.date);
      formData.append("file", values.proof);
      formData.append("ID", studentID);

      // Set the appropriate endpoint based on the selected fee type
      const endpoint =
        values.feeType === "tuition"
          ? "http://localhost:3001/api/v1/update/student/tutionFee/addDue"
          : "http://localhost:3001/api/v1/update/student/hostelFee/addDue";

      try {
        const response = await axios.put(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          "Successfully updated data",
          "success"
        );

        // Reset the form and clear the student data
        formik.resetForm();
        setStudentData(null);  // Clear student data to hide form
        setStudentID("");  // Reset student ID field

      } catch (error) {
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          "Error updating data: " + (error.response?.data?.message || "Unknown error"),
          "error"
        );
      }
    },
  });

  // Function to fetch student data
  const fetchStudentData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/student/${studentID}`);
      setStudentData(response.data.student);
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Successfully Fetched Data",
        "success"
      );
    } catch (error) {
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Student Not Found: " + (error.response?.data?.message || "Unknown error"),
        "error"
      );
    }
  };

  // Function to handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      formik.setFieldValue("proof", file); // Use formik's setFieldValue
    } else {
      alert("Please upload a valid image file.");
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

      {/* Display student data */}
      {studentData && (
        <TableContainer component={Paper} style={{ marginTop: "40px", width: "60%" }}>
          <Typography variant="h6" align="center" sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}>
            ADD NEW DUE DETAILS
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="student details table">
            <TableBody>
              {/* Student ID */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>ID</TableCell>
                <TableCell>
                  <TextField
                    value={studentData.ID || ""}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    disabled
                    sx={{ backgroundColor: "#f0f0f0", borderRadius: "5px" }}
                  />
                </TableCell>
              </TableRow>

              {/* Student Name */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Student Name</TableCell>
                <TableCell>
                  <TextField
                    value={studentData.StudentName || ""}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    disabled
                    sx={{ backgroundColor: "#f0f0f0", borderRadius: "5px" }}
                  />
                </TableCell>
              </TableRow>

              {/* Date Field */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Date</TableCell>
                <TableCell>
                  <TextField
                    type="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    fullWidth
                    name="date"
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                </TableCell>
              </TableRow>

              {/* Amount Field */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Amount</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    fullWidth
                    name="amount"
                    error={formik.touched.amount && Boolean(formik.errors.amount)}
                    helperText={formik.touched.amount && formik.errors.amount}
                  />
                </TableCell>
              </TableRow>

              {/* Due Number Field */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Due Number</TableCell>
                <TableCell>
                  <TextField
                    type="text"
                    autoComplete="off"
                    value={formik.values.dueNumber}
                    onChange={formik.handleChange}
                    fullWidth
                    name="dueNumber"
                    error={formik.touched.dueNumber && Boolean(formik.errors.dueNumber)}
                    helperText={formik.touched.dueNumber && formik.errors.dueNumber}
                  />
                </TableCell>
              </TableRow>

              {/* Fee Type Field */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Fee Type</TableCell>
                <TableCell>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Select Fee Type</FormLabel>
                    <RadioGroup
                      row
                      name="feeType"
                      value={formik.values.feeType}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel value="tuition" control={<Radio />} label="Tuition Fee" />
                      <FormControlLabel value="hostel" control={<Radio />} label="Hostel Fee" />
                    </RadioGroup>
                    {formik.touched.feeType && formik.errors.feeType && (
                      <Typography color="error" variant="body2">
                        {formik.errors.feeType}
                      </Typography>
                    )}
                  </FormControl>
                </TableCell>
              </TableRow>

              {/* Upload Proof Field */}
              <TableRow hover>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>Upload Proof</TableCell>
                <TableCell>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {formik.touched.proof && formik.errors.proof && (
                    <Typography color="error" variant="body2">
                      {formik.errors.proof}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="primary"
            onClick={formik.handleSubmit}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Submit
          </Button>
        </TableContainer>
      )}
    </div>
  );
};

export default StudentEdit;
