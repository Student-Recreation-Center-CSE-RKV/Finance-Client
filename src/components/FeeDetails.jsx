import React from "react";
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

export default function FeeDetails({ data }) {
  const location = useLocation();
  return (
    <>
    
    <TableContainer component={Paper} sx={{
          width: "68%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}>
      <Typography
        variant="h6"
        align="center"
        sx={{ marginTop: '1rem', marginBottom: '1rem', fontWeight: 'bold' }}
      >
        Student Tuition Fee Record
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#000' }}>
            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
              Fee Type
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
              Receipt No.
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Admission Fee</TableCell>
            <TableCell align="center">{data.tutionFee.admissionFee[0].ReceiptNo}</TableCell>
            <TableCell align="center">{data.tutionFee.admissionFee[0].Date}</TableCell>
            <TableCell align="center">{data.tutionFee.admissionFee[0].Amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Re-Admission Fee</TableCell>
            <TableCell align="center">{data.tutionFee.reAdmissionFee[0].ReceiptNo}</TableCell>
            <TableCell align="center">{data.tutionFee.reAdmissionFee[0].Date}</TableCell>
            <TableCell align="center">{data.tutionFee.reAdmissionFee[0].Amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Caution Deposit</TableCell>
            <TableCell align="center">{data.tutionFee.cautionDeposit[0].ReceiptNo}</TableCell>
            <TableCell align="center">{data.tutionFee.cautionDeposit[0].Date}</TableCell>
            <TableCell align="center">{data.tutionFee.cautionDeposit[0].Amount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


      {
        data?.tutionFee && (
          <TableContainer
        component={Paper}
        sx={{
          width: "68%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
        >
          Tution Fee - Installments
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000" }}>
              {" "}
              {/* Black background for header */}
              <TableCell
                sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
              >
                Receipt No.
              </TableCell>{" "}
              {/* White text */}
              <TableCell
                sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
              >
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && location.pathname === "/Student/fee"
              ? data.tutionFee.installments.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.ReceiptNo}</TableCell>
                  <TableCell align="center">{item.Amount}</TableCell>
                  <TableCell align="center">{item.Date}</TableCell>
                </TableRow>
              ))
              : data.installments.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.ReceiptNo}</TableCell>
                  <TableCell align="center">{item.Date}</TableCell>
                  <TableCell align="center">{item.Amount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
        )
      }

      {data?.hostelFee && (
        <TableContainer
          component={Paper}
          sx={{
            width: "68%",
            margin: "auto",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
          >
            Hostel Fee - Installments
          </Typography>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#000" }}>
                {" "}
                {/* Black background for header */}
                <TableCell
                  sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
                >
                  Receipt No.
                </TableCell>{" "}
                {/* White text */}
                <TableCell
                  sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {location.pathname === "/Student/fee"
                ? data.hostelFee.installments.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                    <TableCell align="center">{item.Amount}</TableCell>
                    <TableCell align="center">{item.Date}</TableCell>
                  </TableRow>
                ))
                : data.installments.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                    <TableCell align="center">{item.Date}</TableCell>
                    <TableCell align="center">{item.Amount}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}


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
        </Box>
      )}
    </>
  );
}
