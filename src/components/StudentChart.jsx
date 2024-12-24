import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function StudentChart({ data }) {
  console.log("Graph", data);

  const academicYears = data.sch.academicYears;
  const loanYears = data.loan.acYears;

  const extractYearFromDate = (date) => date.slice(-4);

  const tuitionFeeByYear = {};
  data.tutionFee.installments.forEach((installment) => {
    const year = extractYearFromDate(installment.Date);
    tuitionFeeByYear[year] =
      (tuitionFeeByYear[year] || 0) + parseFloat(installment.Amount);
  });

  const hostelFeeByYear = {};
  data.hostelFee.installments.forEach((installment) => {
    const year = extractYearFromDate(installment.Date);
    hostelFeeByYear[year] =
      (hostelFeeByYear[year] || 0) + parseFloat(installment.Amount);
  });

  const transformedAcademicData = academicYears.map((yearData, index) => ({
    Year: yearData.Year,
    Actual_Pay: yearData.ActualPay,
    Scholarship: yearData.SchReceived || 0,
    Loan: loanYears[index]?.Loan || 0,
  }));

  const transformedFeeData = Object.keys(tuitionFeeByYear).map((year) => ({
    Year: year,
    Tution_Fee_Paid_By_Student: tuitionFeeByYear[year] || 0,
    Hostel_Fee_Paid_By_Student: hostelFeeByYear[year] || 0,
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0",
        }}
      >
        <ResponsiveContainer
          width="85%"
          height={400}
          style={{ margin: "3rem" }}
        >
          <BarChart
            width={800}
            height={400}
            data={data && transformedAcademicData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Actual_Pay" fill="#82ca9d" />
            <Bar dataKey="Scholarship" fill="#ff7300" />
            <Bar dataKey="Loan" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0",
        }}
      >
        <ResponsiveContainer width="85%" height={400}>
          <BarChart width={800} height={400} data={data && transformedFeeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Tution_Fee_Paid_By_Student" fill="#8884d8" />
            <Bar dataKey="Hostel_Fee_Paid_By_Student" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
