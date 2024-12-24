import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const studentRows = ["Student", "Batch", "Father Name", "Gender", "Category"];
export default function StudentDetails({ data }) {
  console.log(data);
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "68%", margin: "auto", marginTop: "1rem" }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#000" }}>
            {studentRows.map((row) => {
              return CustomTableCell(row);
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.entries(data).map(
              ([key, value]) =>
                key !== "_id" && (
                  <TableCell key={key} align="center">
                    {value}
                  </TableCell>
                )
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const CustomTableCell = (data) => {
  return (
    <TableCell
      align="center"
      sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
    >
      {data}
    </TableCell>
  );
};
