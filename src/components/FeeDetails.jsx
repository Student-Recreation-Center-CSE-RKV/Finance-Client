import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));

export default function FeeDetails({ data }) {
  console.log(data && data.installments);
  const data1 = [
    {
      year: "2009-10",
      feeToBePaid: 36000,
      schReceived: 34620,
      otherSchLoanReceived: "",
      feePaidByStudent: "",
      grandTotal: 1380,
      remainingBalance: "",
    },
    {
      year: "2008-09",
      feeToBePaid: 36000,
      schReceived: 33196,
      otherSchLoanReceived: 0,
      feePaidByStudent: 23044,
      grandTotal: 235576,
      remainingBalance: -3576,
    },
  ];
  return (
    <>
      <Grid2 container xs={12} item direction={"column"} alignItems={"center"}>
        <Typography variant="h6" marginTop="1rem" marginBottom="1rem">
          Fee Details-Installments
        </Typography>
        <Item
          sx={{
            width: "50%",
            boxShadow: 3,
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h7">Reciept No.</Typography>
          <Typography variant="h7">Amount</Typography>
          <Typography variant="h7">Date</Typography>
        </Item>
        {data &&
          data.tutionFee.installments.map((item) => {
            return (
              <Item
                sx={{
                  width: "50%",
                  boxShadow: 3,
                  padding: "1rem",
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h7">{item.ReceiptNo}.</Typography>
                <Typography variant="h7">{item.Date}</Typography>
                <Typography variant="h7">{item.Amount}</Typography>
              </Item>
            );
          })}
        <Item
          sx={{
            width: "50%",
            boxShadow: 3,
            padding: "1rem",
            display: "flex",
            alignItems: "right",
            marginTop: "1rem",
            marginBottom: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h7">Grand Total</Typography>

          <Typography variant="h7">{data.tutionFee.Total}</Typography>
        </Item>
      </Grid2>
      <Box
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem ",
          marginTop: "1rem",
        }}
      >
        <Typography variant="h6" marginBottom="1rem">
          Scholarship
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="fee data table">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h7">Academic Year</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Fee to be Paid</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Scholarship Received</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Total Sch Received</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Other Scholarship/Loan</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Fee Paid by Student</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Grand Total</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7">Remaining Balance</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data &&
                data.sch.academicYears.map((row, index) =>
                  row.ActualPay !== 0 ? (
                    <TableRow key={index}>
                      <TableCell>{row.Year}</TableCell>
                      <TableCell>{row.ActualPay}</TableCell>
                      <TableCell>
                        {row.SchReceived === null ? 0 : row.SchReceived}
                      </TableCell>

                      {/* Merged cells with rowSpan */}
                      {index === 0 && (
                        <>
                          <TableCell rowSpan={data.sch.academicYears.length}>
                            {data.sch.TotalSch}
                          </TableCell>
                          <TableCell rowSpan={data.sch.academicYears.length}>
                            {data.sch.OtherSch}
                          </TableCell>
                          <TableCell rowSpan={data.sch.academicYears.length}>
                            {data.sch.FeePaidbyTheStudent}
                          </TableCell>

                          <TableCell rowSpan={data.sch.academicYears.length}>
                            {data.sch.TotalFeePaid}
                          </TableCell>
                          <TableCell rowSpan={data.sch.academicYears.length}>
                            {data.sch.RemainingBalance}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ) : null
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
