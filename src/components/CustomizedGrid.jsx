import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function CustomizedGrid({ data }) {
  const id=(data && data.ID)? data.ID : (data && data?.tutionFee && data?.tutionFee?.ID)? data.tutionFee.ID:""
  return (
    <TableContainer component={Paper} sx={{ width: "68%", margin: "auto", marginTop: "1rem" }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">
                RKV ID No: <Typography component="span" fontWeight="bold" variant="h6">{id}</Typography>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


  );
}
