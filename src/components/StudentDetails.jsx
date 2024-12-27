import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

const studentRows = ["StudentName", "FatherName", "BATCH", "ID", "Gender", "Category"];
const correspondingValues = ["Student Name", "Father Name", "Batch", "ID", "Gender", "Category"];

export default function StudentDetails({ data }) {
  // console.log("Revanth", data);

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%" }}
    >
      <Table>
        <TableBody>
          {Array.from({ length: 3 }).map((_, i) => (
            <TableRow key={i}>
              
              <CustomTableCell
                label={correspondingValues[2 * i]}
                value={data[studentRows[2 * i]] || "N/A"}
              />
              <CustomTableCell
                label={correspondingValues[2 * i + 1]}
                value={data[studentRows[2 * i + 1]] || "N/A"}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CustomTableCell({ label, value }) {
  return (
    <>
      <TableCell
        align="center"
        sx={{ fontWeight: "bold", border: "1px solid black" }}
      >
        {label}
      </TableCell>
      <TableCell
        align="center"
        sx={{ border: "1px solid black" }}
      >
        {value}
      </TableCell>
    </>
  );
}
