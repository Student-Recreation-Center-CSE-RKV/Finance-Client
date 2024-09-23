import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import {
  CircularProgress,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";


export default function TotalChartsByCategory({ data }) {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  
  const [selectedCategoryChart, setSelectedCategoryChart] = useState("gender"); // Ensure only one group is active at a time


  
  const categoryData  = data
    console.log("Revanth Category Data",categoryData)

  

  

  

  // -- Category-based data transformation --
  const casteData = Object.keys(categoryData.caste).sort().map((key) => ({
    name: key,
    value: categoryData.caste[key],
  }));
  const genderData = Object.keys(categoryData.gender).sort().map((key) => ({
    name: key,
    value: categoryData.gender[key],
  }));
  const studentPaidDataByCategory = Object.keys(categoryData.feePaidByStudent).sort().map((key) => ({
    name: key,
    value: categoryData.feePaidByStudent[key],
  }));
  const scholarshipsDataByCategory = Object.keys(categoryData.scholarships).sort().map((key) => ({
    name: key,
    value: categoryData.scholarships[key],
  }));
  const loansAndOthersDataByCategory = Object.keys(categoryData.loansAndOthers).sort().map((key) => ({
    name: key,
    value: categoryData.loansAndOthers[key],
  }));
  const actualFeeDataByCategory = Object.keys(categoryData.actualPay).sort().map((key) => ({
    name: key,
    value: categoryData.actualPay[key],
  }));
  const remBalanceDataByCategory = Object.keys(categoryData.remBalance).sort().map((key) => ({
    name: key,
    value: categoryData.remBalance[key],
  }));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      setLoading(false);
      handleCategoryChartClick("feePaid"); // Set default chart on load
    };

    fetchData();
  }, []);

  

  const handleCategoryChartClick = (chartType) => {
    if (chartType !== selectedCategoryChart) {
      setSelectedCategoryChart(chartType);
      
      let newData;
      switch (chartType) {
        case "gender":
          newData = genderData;
          break;
        case "caste":
          newData = casteData;
          break;
        case "feePaid":
          newData = studentPaidDataByCategory;
          break;
        case "scholarships":
          newData = scholarshipsDataByCategory;
          break;
        case "loans":
          newData = loansAndOthersDataByCategory;
          break;
        case "tuitionFee":
          newData = actualFeeDataByCategory;
          break;
        case "remainingBalance":
          newData = remBalanceDataByCategory;
          break;
        default:
          newData = [];
      }
      setChartData(newData);
    }
  };


  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
          <CircularProgress />
          <Typography variant="h6" style={{ marginLeft: "1rem" }}>Loading...</Typography>
        </div>
      ) : (
        <div style={{ paddingLeft: "2rem" }}> {/* Left Padding Applied Here */}
          

          <Typography variant="h6">Category-Based Details</Typography>
          
          <ToggleButtonGroup
            value={selectedCategoryChart}
            exclusive
            onChange={(event, newAlignment) => handleCategoryChartClick(newAlignment)}
            aria-label="category-based chart selection"
            style={{ margin: "1rem" }}
          >
            <ToggleButton value="gender">Gender Distribution</ToggleButton>
            <ToggleButton value="caste">Caste Distribution</ToggleButton>
            <ToggleButton value="feePaid">Total Fee Paid</ToggleButton>
            <ToggleButton value="scholarships">Scholarships</ToggleButton>
            <ToggleButton value="loans">Loans</ToggleButton>
            <ToggleButton value="tuitionFee">Tuition Fee</ToggleButton>
            <ToggleButton value="remainingBalance">Remaining Balance</ToggleButton>
          </ToggleButtonGroup>

         

          <ResponsiveContainer width="90%" height={400} style={{ margin: "3rem" }}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                width={80} // Adjust the width as needed
                tick={{ fontSize: 12, fill: "#000" }} // Adjust font size and color
                tickLine={true} // Add tick lines for better visibility
                axisLine={{ stroke: '#000', strokeWidth: 1 }} // Axis line color and width
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
