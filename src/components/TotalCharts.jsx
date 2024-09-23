import React, { useState, useEffect } from "react";
import TotalChartsByCategory from "./TotalChartsByCategory"
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
import studentsShared from "../shared/StudentsShared";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function TotalCharts({ data }) {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [selectedBatchChart, setSelectedBatchChart] = useState("feePaid");
  const { categoryData } = studentsShared.preprocessDataByCategory(data);
  const [categoryDataFetched, setCategoryDataFetched] = useState(categoryData)


  const { batchData } = studentsShared.preprocessDataByBatch(data);
  

  const [selectedValueOfDropDown, setSelectedValueOfDropDown] = useState(""); // state to hold selected value
  const optionsArray = batchData.AllBatches; // array with items
  
  const handleChange = async (event) => {
    const selectedBatch = event.target.value;
    setSelectedValueOfDropDown(selectedBatch); // update selected value
    setLoading(true); // start loading state
    try {
      const response = await studentsShared.getAllStudents(selectedBatch);
      const data = studentsShared.preprocessDataByCategory(response.data);
      
      setCategoryDataFetched(data.categoryData);
    } catch (error) {
      console.error("Error fetching student data:", error);
      // Optionally set an error state to display a message to the user
    } finally {
      setLoading(false); // end loading state
      console.log("Revanth",categoryDataFetched)
    }
  };


  // -- Batch-based data transformation --
  const studentPaidData = Object.keys(batchData.feePaidByStudent).map((key) => ({
    name: key,
    value: batchData.feePaidByStudent[key],
  }));
  const scholarshipsData = Object.keys(batchData.scholarships).map((key) => ({
    name: key,
    value: batchData.scholarships[key],
  }));
  const loansAndOthersData = Object.keys(batchData.loansAndOthers).map((key) => ({
    name: key,
    value: batchData.loansAndOthers[key],
  }));
  const actualFeeData = Object.keys(batchData.actualPay).map((key) => ({
    name: key,
    value: batchData.actualPay[key],
  }));
  const remBalanceData = Object.keys(batchData.remBalance).map((key) => ({
    name: key,
    value: batchData.remBalance[key],
  }));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      setLoading(false);
      handleBatchChartClick("feePaid"); // Set default chart on load
    };

    fetchData();
  }, []);

  const handleBatchChartClick = (chartType) => {
    if (chartType !== selectedBatchChart) {
      setSelectedBatchChart(chartType);
      
      let newData;
      switch (chartType) {
        case "feePaid":
          newData = studentPaidData;
          break;
        case "scholarships":
          newData = scholarshipsData;
          break;
        case "loans":
          newData = loansAndOthersData;
          break;
        case "tuitionFee":
          newData = actualFeeData;
          break;
        case "remainingBalance":
          newData = remBalanceData;
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
          <Typography variant="h6">Batch-Based Details</Typography>
          <ToggleButtonGroup
            value={selectedBatchChart}
            exclusive
            onChange={(event, newAlignment) => handleBatchChartClick(newAlignment)}
            aria-label="batch-based chart selection"
            style={{ margin: "1rem" }}
          >
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


          <Typography variant="h6">Category-Based Details</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValueOfDropDown} // set the value from state
              label="Select Option"
              onChange={handleChange} // event handler for selection
            >
              {optionsArray.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TotalChartsByCategory data={categoryDataFetched}/>
        </div>
      )}
    </>
  );
}
