import React, { useState, useEffect } from "react";
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

const feeDetailsRows = [
  "Academic Year",
  "Fee to be Paid",
  "Scholarship Received",
  "Other Scholarship/Loan",
  "Fee Paid by Student",
  "Grand Total",
  "Remaining Balance",
];

export default function FeeDetails({ data }) {
  const location = useLocation();
  console.log("FeeDetails", data);
  const [isBalanceZero, setIsBalanceZero] = useState(false);

  const checkBalance = () => {
    if (data && data.sch && data.sch.RemainingBalance <= 0) {
      setIsBalanceZero(true);
    } else {
      setIsBalanceZero(false);
    }
  };

  useEffect(() => {
    checkBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <DueDetails data={data} />

      {location.pathname === "/Student/fee" && (
        <Box sx={{ width: "100%", margin: "auto" }}>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                    }}
                    colSpan={7}
                  >
                    All ScholarShip Details
                  </TableCell>
                </TableRow>
                <TableRow>
                  {feeDetailsRows.map((row) => {
                    return CustomTableCell(row);
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.sch.academicYears.map(
                    (row, index) =>
                      row.ActualPay !== 0 && (
                        <TableRow key={index}>
                          <TableCell align="center" sx={{ border: "1px solid black" }}>{row.Year}</TableCell>
                          <TableCell align="center" sx={{ border: "1px solid black" }}>{row.ActualPay}</TableCell>
                          <TableCell align="center" sx={{ border: "1px solid black" }}>
                            {row.SchReceived ?? 0}
                          </TableCell>
                          {index === 0 && (
                            <>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                                sx={{ border: "1px solid black" }}
                              >
                                {data.sch.OtherSch}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                                sx={{ border: "1px solid black" }}
                              >
                                {data.sch.FeePaidbyTheStudent}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                                sx={{ border: "1px solid black" }}
                              >
                                {data.sch.TotalFeePaid}
                              </TableCell>
                              <TableCell
                                align="center"
                                rowSpan={data.sch.academicYears.length}
                                sx={{ border: "1px solid black" }}
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
                    sx={{ fontWeight: "bold", textAlign: "right", border: "1px solid black" }}
                  >
                    Total Scholarship Received:
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", border: "1px solid black" }}>
                    {data.sch.TotalSch}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <ConsentForm
              studentName={data.student.student.StudentName}
              studentId={data.student.student.ID}
              isDisabled={!isBalanceZero}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

const CustomTableCell = (data) => {
  return (
    <TableCell
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        border: "1px solid black"
      }}
    >
      {data}
    </TableCell>
  );
};
