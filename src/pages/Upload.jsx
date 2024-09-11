import React, { useState } from "react";
import { Button, Typography, Container, Box, Card, CardContent, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";

const UploadPage = ({ triggerSnackbar, setMessage }) => {
    const [fileType, setFileType] = useState("student");
    const [selectedFile, setSelectedFile] = useState(null);
    const [status, setStatus] = useState("Select a file to see its status");
    const [typeOfExcel, setTypeOfFile] = useState("tutionFee");
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    // Handle file upload
    const handleFileUpload = async () => {
        if (!selectedFile) {
            setMessage(`No file selected for upload.`);
            triggerSnackbar();
            return;
        }
        setIsLoading(true); // Set loading state
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("http://localhost:3001/api/v1/upload/tution/student", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                setMessage(`Files uploaded successfully`);
                triggerSnackbar();
            } else {
                setMessage(`File upload failed with status code: ${response.status}`);
            triggerSnackbar();
            }
        } catch (error) {
            setMessage(`An error occurred: ${error.message}`);
            triggerSnackbar();
        } finally {
            setIsLoading(false); // Reset loading state after the request
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100vh",
                    paddingTop: 4,
                }}
            >
                {/* Heading */}
                <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ marginBottom: 4 }}>
                    Upload Excel To DataBase
                </Typography>

                {/* Radio buttons to select file type */}
                <FormLabel component="legend">File Type</FormLabel>
                <RadioGroup
                    row
                    value={fileType}
                    onChange={(event) => setFileType(event.target.value)}
                    sx={{ marginBottom: 4 }}
                >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="msi" control={<Radio />} label="MSI" />
                </RadioGroup>

                {fileType === "student" ? (
                    <>
                        <FormLabel component="legend">Student File Type</FormLabel>
                        <RadioGroup
                            column
                            value={typeOfExcel}
                            onChange={(event) => setTypeOfFile(event.target.value)}
                            // sx={{ marginBottom: 4, width: "100%", justifyContent: "space-between" }}  // Ensure it takes full width and space out items
                        >
                            <FormControlLabel value="tutionFee" control={<Radio />} label="Tution Fee" />
                            <FormControlLabel value="scholarShip" control={<Radio />} label="ScholarShip" />
                            <FormControlLabel value="loanAndOthers" control={<Radio />} label="Loan and others" />
                            <FormControlLabel value="studentDetails" control={<Radio />} label="Student details" />
                        </RadioGroup>

                    </>
                ) : console.log("MSI Selected")}

                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{ marginBottom: 2, paddingY: 2, fontSize: "1rem" }}
                >
                    {fileType === "student" ? "Choose Student File" : "Choose MSI File"}
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>

                {/* Display selected file name */}
                {selectedFile && (
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        Selected File: {selectedFile.name}
                    </Typography>
                )}

                {/* LoadingButton for file upload */}
                <LoadingButton
                    loading={isLoading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    onClick={handleFileUpload}
                    sx={{ paddingY: 2, fontSize: "1rem" }}
                >
                    {fileType === "student" ? `Upload Student Data ` : `Upload MSI Data `}
                </LoadingButton>

                {/* Card for file upload status
                <Card sx={{ width: "100%", padding: 3, marginTop: 4 }}>
                    <CardContent>
                        <Typography variant="body1">{status}</Typography>
                    </CardContent>
                </Card> */}
            </Box>
        </Container>
    );
};

export default UploadPage;
