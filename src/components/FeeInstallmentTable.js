import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {CustomTableCell} from './DueDetails';

const FeeInstallmentsTable = ({ title, installmentsData, feeType ,total }) => {
  const feeRows = ["Receipt No", "Amount", "Date"];

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#000" }}>
            <TableCell
              colSpan={6}
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
                border: "1px solid black",
              }}
            >
              {title}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            {feeRows.map((row) => (
              <CustomTableCell key={row} data={row} />
            ))}
            {feeRows.map((row) => (
              <CustomTableCell key={row} data={row} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {installmentsData?.map((item, index) => {
            if (index % 2 === 0) {
              // Pair the current item with the next item in the row
              const nextItem = installmentsData[index + 1];
              return (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {item.ReceiptNo}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {item.Amount}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {item.Date}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {nextItem ? nextItem.ReceiptNo : ""}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {nextItem ? nextItem.Amount : ""}
                  </TableCell>
                  <TableCell align="center" sx={{ border: "1px solid black" }}>
                    {nextItem ? nextItem.Date : ""}
                  </TableCell>
                </TableRow>
              );
            }
            return null;
          })}
          <TableRow>
            <TableCell align="center" sx={{ border: "1px solid black" }} colSpan={6}>
              {`Total ${feeType} Fee Paid: ${total}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeeInstallmentsTable;
