import React, { useState, useEffect } from "react";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
// import VerifyTextField from "../utils/VerifyTextField";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const EditInstallment = ({ setMessage, triggerSnackbar }) => {
  const [studentID, setStudentID] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [destinationType, setDestinationType] = useState("");
  const [dueNumbers, setDueNumbers] = useState([]);
  const [selectedDueNumber, setSelectedDueNumber] = useState("");
  const [dueDetails, setDueDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch fee details based on student ID
  const fetchFeeDetails = async () => {
    // if (!VerifyTextField.textFieldCheck(studentID)) {
    //   snackbarUtil(setMessage, triggerSnackbar, "Enter valid ID", "error");
    //   return;
    // }
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/v1/student/fee/${studentID}`
      );
      const feeData = response.data.feeDetails;
      setDueNumbers(feeData.map((due) => due.dueNumber)); // Extract due numbers
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Fetched Fee Details",
        "success"
      );
      setIsLoading(false);
    } catch (error) {
      snackbarUtil(setMessage, triggerSnackbar, error.message, "error");
      setIsLoading(false);
    }
  };

  // Fetch details for the selected due number
  const fetchDueDetails = () => {
    const selectedDue = dueNumbers.find(
      (due) => due.dueNumber === selectedDueNumber
    );
    if (selectedDue) {
      setDueDetails(selectedDue);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* Input for Student ID and Fetch Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <TextField
          label="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          fullWidth
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={fetchFeeDetails}
          disabled={isLoading}
          sx={{ 
                marginTop: 2 ,
                marginBottom:2,
             }}
        >
          Fetch Fee Details
        </Button>
      </div>
      {/* Source Type and Destination Type Select */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          width: "60%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel>Source Type</InputLabel>
          <Select
            value={sourceType}
            onChange={(e) => setSourceType(e.target.value)}
            label="Source Type"
          >
            <MenuItem value="TutionFee">Tuition Fee</MenuItem>
            <MenuItem value="HostelFee">Hostel Fee</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Destination Type</InputLabel>
          <Select
            value={destinationType}
            onChange={(e) => setDestinationType(e.target.value)}
            label="Destination Type"
          >
            <MenuItem value="TutionFee">Tuition Fee</MenuItem>
            <MenuItem value="HostelFee">Hostel Fee</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Due Number Dropdown */}
      {dueNumbers.length > 0 && (
        <div style={{ display: "flex", marginTop: "20px", width: "60%" }}>
          <FormControl fullWidth>
            <InputLabel>Due Number</InputLabel>
            <Select
              value={selectedDueNumber}
              onChange={(e) => {
                setSelectedDueNumber(e.target.value);
                fetchDueDetails();
              }}
              label="Due Number"
            >
              {dueNumbers.map((due) => (
                <MenuItem key={due} value={due}>
                  {due}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {/* Display Due Details */}
      {dueDetails && (
        <TableContainer
          component={Paper}
          style={{ marginTop: "20px", width: "60%" }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}
          >
            Due Details
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="due details table">
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>
                  Due Number
                </TableCell>
                <TableCell>{dueDetails.dueNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>
                  Amount
                </TableCell>
                <TableCell>{dueDetails.amount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "#1976D2" }}>
                  Due Date
                </TableCell>
                <TableCell>{dueDetails.dueDate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Action Button */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Integrate action here
          }}
          disabled={!dueDetails}
        >
          Perform Action
        </Button>
      </div>
    </div>
  );
};

export default EditInstallment;
