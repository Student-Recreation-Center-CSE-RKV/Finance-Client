import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import studentsShared from "../shared/StudentsShared";
export default function TotalCharts({ data }) {
  const processData = studentsShared.preprocessData(data);
  const {
    gender,
    caste,
    feePaidByStudent,
    scholarships,
    loansAndOthers,
    actualPay,
    remBalance,
    casteFee,
  } = processData;
  // Create data for gender chart
  const genderData = Object.keys(gender).map((key) => ({
    name: key,
    value: gender[key],
  }));

  // Create data for caste chart
  const casteData = Object.keys(caste).map((key) => ({
    name: key,
    value: caste[key],
  }));

  // Create data for total fee chart
  const studentPaidData = [
    { name: "Fee Paid By Student", value: feePaidByStudent },
  ];

  // Create data for scholarships chart
  const scholarshipsData = [{ name: "Scholarships", value: scholarships }];

  // Create data for tuition fee chart
  const ActualFeeData = [{ name: "Actual pay", value: actualPay }];

  // Create data for loans chart
  const otherScholarshipData = [
    { name: "Loans and others", value: loansAndOthers },
  ];

  const remBalanceData = [
    {
      name: "Balance Amount",
      value: remBalance,
    },
  ];

  const casteFeeData = Object.keys(casteFee).map((key, index) => ({
    name: key,
    value: casteFee[key],
  }));

  return (
    <>
      <ResponsiveContainer width="95%" height={400} style={{ margin: "3rem" }}>
        <h2>Gender Distribution</h2>
        <BarChart width={400} height={300} data={genderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="value" stroke="#8884d8" />
        </BarChart>

        <h2>Caste Distribution</h2>
        <LineChart width={400} height={300} data={casteData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h2>Total Fee</h2>
        <LineChart width={400} height={300} data={studentPaidData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h2>Scholarships</h2>
        <LineChart width={400} height={300} data={scholarshipsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h2>Tuition Fee</h2>
        <LineChart width={400} height={300} data={ActualFeeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h2>Loans</h2>
        <LineChart width={400} height={300} data={otherScholarshipData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>

        <h2>Remaining Balance</h2>
        <LineChart width={400} height={300} data={remBalanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
        <h2>Total Fee Paid by Cateogory</h2>
        <LineChart width={400} height={300} data={casteFeeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
