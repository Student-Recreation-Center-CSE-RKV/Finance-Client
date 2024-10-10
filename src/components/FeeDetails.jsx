import React,{useState,useEffect} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import DueDetails from "./DueDetails";
import ConsentForm from "./ConsentForm";

export default function FeeDetails({ data }) {
  const location = useLocation();
  console.log("FeeDetails",data);
  const [isBalanceZero, setIsBalanceZero] = useState(false);

  // Check if the remaining balance is zero or less than zero
  const checkBalance = () => {
    if (data && data.sch && data.sch.RemainingBalance <= 0) {
      setIsBalanceZero(true);
    } else {
      setIsBalanceZero(false); // reset if balance is above zero
    }
  };


  useEffect(() => {
    checkBalance(); // Check balance whenever data changes
  }, [data]);



  return (
    <>
   <DueDetails data={data}/>

      {/* Conditional Scholarship Table */}
      {location.pathname === "/Student/fee" && (
        <Box sx={{ width: "68%", margin: "auto", marginTop: "2rem" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Scholarship
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  {" "}
                  {/* Black background for table head */}
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Academic Year
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Fee to be Paid
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Scholarship Received
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Other Scholarship/Loan
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Fee Paid by Student
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Grand Total
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Remaining Balance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.sch.academicYears.map(
                    (row, index) =>
                      row.ActualPay !== 0 && (
                        <TableRow key={index}>
                          <TableCell align="center">{row.Year}</TableCell>
                          <TableCell align="center">{row.ActualPay}</TableCell>
                          <TableCell align="center">
                            {row.SchReceived ?? 0}
                          </TableCell>
                          {index === 0 && (
                            <>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                              >
                                {data.sch.OtherSch}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                              >
                                {data.sch.FeePaidbyTheStudent}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                              >
                                {data.sch.TotalFeePaid}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                              >
                                {data.sch.RemainingBalance}
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      )
                  )}

                {/* Total Scholarship Row */}
                <TableRow>
                  <TableCell
                    colSpan={2}
                    sx={{ fontWeight: "bold", textAlign: "right" }}
                  >
                    Total Scholarship Received:
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {data.sch.TotalSch}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <ConsentForm studentName={data.student.student.StudentName} studentId={data.student.student.ID}  isDisabled={!isBalanceZero}/>
          </Box>
          
        </Box>
      )}
    </>
  );
}
