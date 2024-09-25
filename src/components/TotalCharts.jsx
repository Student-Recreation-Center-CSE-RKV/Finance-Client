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
import axios from "axios";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { motion } from "framer-motion";

export default function TotalCharts() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [categoryChartData, setCategoryChartData] = useState([]);
  const [selectedBatchChart, setSelectedBatchChart] = useState("");
  const [batchData, setBatchData] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState("0"); // Default batch is "0"
  const [selectedCategoryChart, setSelectedCategoryChart] = useState(""); // Default category chart
  const [categoryDataFetched, setCategoryDataFetched] = useState([]);


  useEffect(() => {
    // Fetch batch data on load
    const fetchBatchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/v1/graph/batch");
        setBatchData(response.data);
        handleBatchChartClick("feePaid", response.data); // Default chart type
      } catch (error) {
        console.error("Error fetching batch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBatchData();
  }, []);

  useEffect(() => {
    // Fetch category data for the selected batch
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/graph/category/${selectedBatch}`);
        setCategoryDataFetched(response.data);
        handleCategoryChartClick("totalPeople", response.data); // Initialize with totalPeople data
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [selectedBatch]);

  const handleBatchSelectionChange = async (event) => {
    const batch = event.target.value;
    setSelectedBatch(batch);
  };

  // Handle the batch chart selection
  const handleBatchChartClick = (chartType, data = batchData) => {
    if (chartType !== selectedBatchChart) {
      setSelectedBatchChart(chartType);

      let newData;
      switch (chartType) {
        case "feePaid":
          newData = data.totalScholarShipByBatch.map((item) => ({
            name: item._id,
            value: item.totalFeePaid,
          }));
          break;
        case "scholarships":
          newData = data.totalScholarShipByBatch.map((item) => ({
            name: item._id,
            value: item.totalScholarShip,
          }));
          break;
        case "loans":
          newData = data.totalLoanByBatch.map((item) => ({
            name: item._id,
            value: item.totalLoan,
          }));
          break;
        case "hostelFee":
          newData = data.totalHostelfeeBybatch.map((item) => ({
            name: item._id,
            value: item.totalHostelFee,
          }));
          break;
        case "tutionFee":
          newData = data.totalTutionFeeByBatch.map((item) => ({
            name: item._id,
            value: item.totalTutionFee,
          }));
          break;
        case "remainingBalance":
          newData = data.totalScholarShipByBatch.map((item) => ({
            name: item._id,
            value: item.totalRemainingBalance,
          }));
          break;
        default:
          newData = [];
      }
      setChartData(newData);
    }
  };

  // Handle the category chart selection
  const handleCategoryChartClick = (chartType, data = categoryDataFetched) => {
    if (chartType !== selectedCategoryChart) {
      setSelectedCategoryChart(chartType);

      let newData;
      switch (chartType) {
        case "totalPeople":
          newData = data.totalPeople.map((item) => ({
            name: item._id,
            value: item.totalPeople,
          }));
          break;
        case "totalFeePaid":
          newData = data.feesBycategory.map((item) => ({
            name: item._id,
            value: item.totalFeePaid,
          }));
          break;
        case "totalRemainingBalance":
          newData = data.feesBycategory.map((item) => ({
            name: item._id,
            value: item.totalRemainingBalance,
          }));
          break;
          case "gender":
            newData = data.gender.map((item) => ({
              name: item._id,
              value: item.totalStudents,
            }));
            break;
        case "hostelFee":
          newData = data.totalHostelFee.map((item) => ({
            name: item._id,
            value: item.totalHostelFee,
          }));
          break;
        case "tutionFee":
          newData = data.totalTutionFee.map((item) => ({
            name: item._id,
            value: item.totalTutionFee,
          }));
          break;
        case "loan":
          newData = data.totalLoan.map((item) => ({
            name: item._id,
            value: item.totalLoan,
          }));
          break;


        default:
          newData = [];
      }
      setCategoryChartData(newData);
    }
  };

  const batchOptions = batchData ? batchData.totalScholarShipByBatch.map((item) => item._id) : [];
  batchOptions.push("0");

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
          <CircularProgress />
          <Typography variant="h6" style={{ marginLeft: "1rem" }}>Loading...</Typography>
        </div>
      ) : (

        <motion.div
            initial={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 100,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
          >
            <div style={{ paddingLeft: "2rem" }}>
          {/* Batch-Based Details */}
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
            <ToggleButton value="tutionFee">Tution Fee</ToggleButton>
            <ToggleButton value="hostelFee">Hostel Fee</ToggleButton>
            <ToggleButton value="remainingBalance">Remaining Balance</ToggleButton>
          </ToggleButtonGroup>

          <ResponsiveContainer width="90%" height={400} style={{ margin: "3rem" }}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width={80} tick={{ fontSize: 12, fill: "#000" }} tickLine={true} axisLine={{ stroke: '#000', strokeWidth: 1 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={colors[0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* Dropdown for Batch Selection */}
          <FormControl fullWidth style={{ marginTop: '20px', marginBottom: '16px' }}>
            <InputLabel id="demo-simple-select-label">Select Batch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedBatch}
              label="Select Batch"
              onChange={handleBatchSelectionChange}
            >
              {batchOptions.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Category-Based Details */}
          <Typography variant="h6">Category-Based Details</Typography>
          <ToggleButtonGroup
            value={selectedCategoryChart}
            exclusive
            onChange={(event, newAlignment) => handleCategoryChartClick(newAlignment)}
            aria-label="category-based chart selection"
            style={{ margin: "1rem" }}
          >
            <ToggleButton value="gender">Gender</ToggleButton>
            <ToggleButton value="totalPeople">Total People</ToggleButton>
            <ToggleButton value="totalFeePaid">Total Fee Paid</ToggleButton>
            <ToggleButton value="totalRemainingBalance">Remaining Balance</ToggleButton>
            <ToggleButton value="hostelFee">Hostel Fee</ToggleButton>
            <ToggleButton value="tutionFee">Tution Fee</ToggleButton>
            <ToggleButton value="loan">Loan</ToggleButton>
          </ToggleButtonGroup>

          <ResponsiveContainer width="90%" height={400} style={{ margin: "3rem" }}>
            <BarChart data={categoryChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width={80} tick={{ fontSize: 12, fill: "#000" }} tickLine={true} axisLine={{ stroke: '#000', strokeWidth: 1 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={colors[1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

          </motion.div>

        
      )}
    </>
  );
}
