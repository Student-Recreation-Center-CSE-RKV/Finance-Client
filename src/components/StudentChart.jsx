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
  BarChart,
  Bar,
} from "recharts";

export default function StudentChart({ data }) {
  console.log("Graph", data);

  const academicYears = data.sch.academicYears;
  const loanYears = data.loan.acYears;

  // Extract year from the Date field (using the last 4 digits of the date string)
  const extractYearFromDate = (date) => date.slice(-4);

  // Create a map to store tuition and hostel fees paid per year
  const tuitionFeeByYear = {};
  data.tutionFee.installments.forEach((installment) => {
    const year = extractYearFromDate(installment.Date);
    tuitionFeeByYear[year] = (tuitionFeeByYear[year] || 0) + parseFloat(installment.Amount);
  });

  const hostelFeeByYear = {};
  data.hostelFee.installments.forEach((installment) => {
    const year = extractYearFromDate(installment.Date);
    hostelFeeByYear[year] = (hostelFeeByYear[year] || 0) + parseFloat(installment.Amount);
  });

  // Transforming data for the first chart (academic years with Actual Pay, Scholarship, Loan)
  const transformedAcademicData = academicYears.map((yearData, index) => ({
    Year: yearData.Year,
    Actual_Pay: yearData.ActualPay,
    Scholarship: yearData.SchReceived || 0,
    Loan: loanYears[index]?.Loan || 0,
  }));

  // Transforming data for the second chart (tuition and hostel fees based on their own years)
  const transformedFeeData = Object.keys(tuitionFeeByYear).map((year) => ({
    Year: year,
    Tution_Fee_Paid_By_Student: tuitionFeeByYear[year] || 0,
    Hostel_Fee_Paid_By_Student: hostelFeeByYear[year] || 0,
  }));

  return (
    <>
      {/* First Graph: Academic Data (without Tuition and Hostel Fees) */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem 0" }}>
        <ResponsiveContainer width="85%" height={400} style={{ margin: "3rem" }}>
          <BarChart width={800} height={400} data={data && transformedAcademicData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Replace Line with Bar */}
            <Bar dataKey="Actual_Pay" fill="#82ca9d" />
            <Bar dataKey="Scholarship" fill="#ff7300" />
            <Bar dataKey="Loan" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Second Graph: Tuition and Hostel Fees */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem 0" }}>
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
