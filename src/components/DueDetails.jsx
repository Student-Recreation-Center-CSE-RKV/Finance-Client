import React from "react";
import FeeInstallmentsTable from './FeeInstallmentTable'; // Import the new component
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";

const defaultStudentFees = ["Fee Type", "Reciept No", "Amount", "Date"];
const keys = ["ReceiptNo", "Amount", "Date"];

export default function DueDetails({ data }) {
  const TotalTutionFeeInstallments = data.tutionFee ? data.tutionFee.installments.length : 0;
  const TotalHostelFeeInstallments = data.hostelFee ? data.hostelFee.installments.length : 0;
  const TotalOtherFeeInstallments = data.otherFee ? data.otherFee.installments.length : 0;

  return (
    <>
      <Stack>
        {data?.tutionFee && (
          <TableContainer sx={{ width: "100%" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#000" }}>
                  <TableCell
                    colSpan={4}
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#fff",
                      border: "1px solid black",
                    }}
                  >
                    Admission and Caution Deposit Fee Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow>
                  {defaultStudentFees.map((row) => (
                    <CustomTableCell key={row} data={row} />
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.tutionFee.admissionFee?.length > 0 && (
                  <TableRow>
                    <TableCell align="center" sx={{ border: "1px solid black" }}>
                      Admission Fee
                    </TableCell>
                    {keys.map((key, index) => {
                      return (
                        <TableCell
                          key={key}
                          align="center"
                          sx={{ border: "1px solid black" }}
                        >
                          {data.tutionFee.admissionFee[0][key]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )}
                {data.tutionFee.reAdmissionFee?.length > 0 && (
                  <TableRow>
                    <TableCell align="center" sx={{ border: "1px solid black" }}>
                      Re-Admission Fee
                    </TableCell>
                    {keys.map((key, index) => {
                      return (
                        <TableCell
                          key={key}
                          align="center"
                          sx={{ border: "1px solid black" }}
                        >
                          {data.tutionFee.reAdmissionFee[0][key]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )}
                {data.tutionFee.cautionDeposit?.length > 0 && (
                  <TableRow>
                    <TableCell align="center" sx={{ border: "1px solid black" }}>
                      Caution Deposit
                    </TableCell>
                    {keys.map((key, index) => {
                      return (
                        <TableCell
                          key={key}
                          align="center"
                          sx={{ border: "1px solid black" }}
                        >
                          {data.tutionFee.cautionDeposit[0][key]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Reuse the FeeInstallmentsTable component */}
        {TotalTutionFeeInstallments > 0 && (
          <FeeInstallmentsTable
            title="Tuition Fee Installments"
            installmentsData={data.tutionFee.installments}
            feeType="Tuition"
            total={data.tutionFee.Total}
          />
        )}

        {TotalHostelFeeInstallments > 0 && (
          <FeeInstallmentsTable
            title="Hostel Fee Installments"
            installmentsData={data.hostelFee.installments}
            feeType="Hostel"
            total={data.hostelFee.Total}
          />
        )}

        {TotalOtherFeeInstallments > 0 && (
          <FeeInstallmentsTable
            title="Other Fee Installments"
            installmentsData={data.otherFee.installments}
            feeType="Other"
            total={data.otherFee.Total}
          />
        )}
      </Stack>
    </>
  );
}

export const CustomTableCell = ({ data }) => {
  return (
    <TableCell
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      {data}
    </TableCell>
  );
};