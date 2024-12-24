import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import CustomTypography from "./CustomTypography";

const defaultStudentFees = ["Fee Type", "Reciept No", "Amount", "Date"];
const feeRows = ["Reciept No", "Amount", "Date"];
const feeRows2 = ["Reciept No", "Amount", "Date", "Category"];
export default function DueDetails({ data }) {
  return (
    <>
      <Stack>
        {data?.tutionFee && (
          <TableContainer sx={{ width: "100%" }}>
            <CustomTypography>Student Tuition Fee Record</CustomTypography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  {defaultStudentFees.map((row) => {
                    return CustomTableCell(row);
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.tutionFee.admissionFee?.length > 0 && (
                  <TableRow>
                    <TableCell align="center">Admission Fee</TableCell>
                    {Object.entries(data.tutionFee.admissionFee[0]).map(
                      ([key, value]) =>
                        key !== "_id" && (
                          <TableCell key={key} align="center">
                            {value}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                )}
                {data.tutionFee.reAdmissionFee?.length > 0 && (
                  <TableRow>
                    <TableCell align="center">Re-Admission Fee</TableCell>
                    {Object.entries(data.tutionFee.reAdmissionFee[0]).map(
                      ([key, value]) =>
                        key !== "_id" && (
                          <TableCell key={key} align="center">
                            {value}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                )}
                {data.tutionFee.cautionDeposit?.length > 0 && (
                  <TableRow>
                    <TableCell align="center">Caution Deposit</TableCell>
                    {Object.entries(data.tutionFee.cautionDeposit[0]).map(
                      ([key, value]) =>
                        key !== "_id" && (
                          <TableCell key={key} align="center">
                            {value}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Tuition Fee Installments Section */}
        {data?.tutionFee && (
          <TableContainer
            component={Paper}
            sx={{
              width: "68%",
              margin: "auto",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            <CustomTypography>Tuition Fee - Installments</CustomTypography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  {feeRows.map((row) => {
                    return CustomTableCell(row);
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.tutionFee.installments?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                    <TableCell align="center">{item.Amount}</TableCell>
                    <TableCell align="center">{item.Date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

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
            <CustomTypography>Hostel Fee - Installments</CustomTypography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  {feeRows.map((row) => {
                    return CustomTableCell(row);
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.hostelFee.installments?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                    <TableCell align="center">{item.Amount}</TableCell>
                    <TableCell align="center">{item.Date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {data?.otherFee && (
          <TableContainer
            component={Paper}
            sx={{
              width: "68%",
              margin: "auto",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            <CustomTypography>Other Fees - Installments</CustomTypography>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  {feeRows2.map((row) => {
                    return CustomTableCell(row);
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.otherFee.installments &&
                  data.otherFee.installments?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{item.ReceiptNo}</TableCell>
                      <TableCell align="center">{item.Amount}</TableCell>
                      <TableCell align="center">{item.Date}</TableCell>
                      <TableCell align="center">{item.category}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Stack>
    </>
  );
}

const CustomTableCell = (data) => {
  return (
    <TableCell
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {data}
    </TableCell>
  );
};
