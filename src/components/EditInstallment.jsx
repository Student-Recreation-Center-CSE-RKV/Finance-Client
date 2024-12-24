import React, { useState } from "react";
import axios from "axios";
import { snackbarUtil } from "../utils/SnackbarUtils";
import {
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
  Stack,
  Box,
} from "@mui/material";
import Search from "./Search";

export default function EditInstallmen({ setMessage, triggerSnackbar }) {
  const [studentID, setStudentID] = useState("");
  const [sourceType, setSourceType] = useState("");
  const [destinationType, setDestinationType] = useState("");
  const [dueNumbers, setDueNumbers] = useState([]);
  const [selectedDueNumber, setSelectedDueNumber] = useState("");
  const [dueDetails, setDueDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showDueDetails, setShowDueDetails] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isError, setError] = useState(false);

  const modelsMap = {
    TutionFee: "TutionFeeSchema",
    HostelFee: "HostelFeeSchema",
    Others: "OtherFromMSI",
  };

  const fetchDues = async () => {
    setSelectedDueNumber(null);
    setDueNumbers([]);
    setDueDetails(null);
    setShowDueDetails(false);
    if (!studentID || !sourceType || !destinationType) {
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Please complete all fields",
        "error"
      );
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/v1/getDuesBasedOnFee/${modelsMap[sourceType]}/${studentID}`
      );

      setDueNumbers(response.data[0]);
      if (response.data[0].length > 0)
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          "Fetched Fee Details",
          "success"
        );
      else snackbarUtil(setMessage, triggerSnackbar, "No Active Dues", "error");
    } catch (error) {
      snackbarUtil(setMessage, triggerSnackbar, error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDueDetails = (dueNumber) => {
    const selectedDue = dueNumbers.find((due) => due.ReceiptNo === dueNumber);
    if (selectedDue) {
      setDueDetails({
        dueNumber: selectedDue.ReceiptNo,
        amount: selectedDue.Amount,
        dueDate: selectedDue.Date,
      });
      setShowDueDetails(true);
    } else {
      setShowDueDetails(false);
    }
  };

  const changeInstallment = async () => {
    try {
      await axios.put(
        "http://localhost:3001/api/v1/update/studentFee/exchange",
        {
          sourceModel: modelsMap[sourceType],
          targetModel: modelsMap[destinationType],
          ID: studentID,
          DueNumber: selectedDueNumber,
        }
      );
      snackbarUtil(
        setMessage,
        triggerSnackbar,
        "Installment Updated",
        "success"
      );
    } catch (error) {
      snackbarUtil(setMessage, triggerSnackbar, error.message, "error");
    }
  };

  return (
    <>
      <Box width={"100%"}>
        <Search
          getData={fetchDues}
          ID={studentID}
          setID={setStudentID}
          isLoading={isLoading}
          isError={isError}
          text="Enter Student Id"
          placeholder="RXXXXXX"
        />

        <Stack direction={"row"} gap={5} sx={{ width: "100%" }} mt={3} mb={3}>
          <FormControl fullWidth>
            <InputLabel>Source Type</InputLabel>
            <Select
              sx={{ width: "100%" }}
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
        </Stack>

        {dueNumbers.length > 0 && (
          <Stack>
            <FormControl sx={{ width: "100%" }}>
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
                  <MenuItem key={due.ReceiptNo} value={due.ReceiptNo}>
                    Reciept No: {due.ReceiptNo} - Amount: {due.Amount}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        )}

        {dueDetails && (
          <TableContainer
            component={Paper}
            style={{ marginTop: "20px", width: "60%" }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={changeInstallment}
            disabled={!dueDetails}
          >
            Perform Action
          </Button>
        </div>
      </Box>
    </>
  );
}
