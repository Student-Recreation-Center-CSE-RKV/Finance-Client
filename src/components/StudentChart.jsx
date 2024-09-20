import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

export default function StudentChart({ data }) {
  const academicYears = data.sch.academicYears;
  const loanYears = data.loan.acYears;
  // Transforming data into an array format suitable for the chart
  const transformedData = academicYears.map((yearData, index) => ({
    Year: yearData.Year,
    Tution_Fee_Paid_By_Student: data.tutionFee.installments.reduce(
      (total, installment) => total + parseFloat(installment.Amount),
      0
    ),
    Actual_Pay: yearData.ActualPay,
    Scholarship: yearData.SchReceived || 0,
    Loan: loanYears[index]?.Loan || 0,
  }));

  //   console.log(transformedData);
  return (
    <>
      <ResponsiveContainer width="95%" height={400} style={{ margin: "3rem" }}>
        <LineChart width={800} height={400} data={data && transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Tution_Fee_Paid_By_Student"
            stroke="#8884d8"
          />
          <Line type="monotone" dataKey="Actual_Pay" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Scholarship" stroke="#ff7300" />
          <Line type="monotone" dataKey="Loan" stroke="#ffc658" />
        </LineChart>
        {/* <BarChart width={800} height={400} data={data && transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tuitionFeePaid" fill="#8884d8" />
          <Bar dataKey="actualPay" fill="#82ca9d" />
          <Bar dataKey="scholarship" fill="#ff7300" />
          <Bar dataKey="loan" fill="#ffc658" />
        </BarChart> */}
      </ResponsiveContainer>
    </>
  );
}
