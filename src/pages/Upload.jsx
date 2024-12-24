import React, { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import fileUtils from "../utils/fileUtils";
import { snackbarUtil } from "../utils/SnackbarUtils";
const UploadPage = ({ triggerSnackbar, setMessage }) => {
  const [fileType, setFileType] = useState("student");
  const [selectedFile, setSelectedFile] = useState(null);
  const [typeOfExcel, setTypeOfFile] = useState("tutionFee");
  const [isLoading, setIsLoading] = useState(false);
  const url =
    process.env.REACT_APP_BASE_URL_PROTOCOL +
    process.env.REACT_APP_BASE_URL_HOST +
    process.env.REACT_APP_BASE_URL_POST +
    process.env.REACT_APP_VERSION;

  const handleFileChange = (event) => {
    console.log(url);
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      console.log("choosen");
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      triggerSnackbar();
      setMessage({
        msg: "Select file to upload",
        type: "error",
      });
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      let temp = fileUtils.typeOfFile(typeOfExcel);
      let newUrl = url + temp;
      console.log(newUrl);

      if (fileType === "msi") {
        newUrl = url + "/upload/msi";
      }

      const response = await axios.post(newUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.status === 200) {
        setSelectedFile(null);
        document.getElementById("file-upload-input").value = "";
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          "File Uploaded successfully",
          "success"
        );
        return;
      }
    } catch (error) {
      setSelectedFile(null);
      console.log(error);
      if (error.status === 500) {
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          `Internal Error(Data Exists)`,
          "error"
        );
      } else if (error.status === 404) {
        snackbarUtil(
          setMessage,
          triggerSnackbar,
          `${error.response.data.message}`,
          "error"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{ marginBottom: 4 }}
        >
          Upload Excel To DataBase
        </Typography>

        <FormLabel component="legend">File Type</FormLabel>
        <RadioGroup
          row
          value={fileType}
          onChange={(event) => setFileType(event.target.value)}
          sx={{ marginBottom: 4 }}
        >
          <FormControlLabel
            value="student"
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel value="msi" control={<Radio />} label="MSI" />
        </RadioGroup>

        {fileType === "student" ? (
          <>
            <Box>
              <FormLabel
                component="legend"
                sx={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                Student File Type
              </FormLabel>
              <RadioGroup
                row
                value={typeOfExcel}
                onChange={(event) => setTypeOfFile(event.target.value)}
                sx={{ marginBottom: "1rem" }}
              >
                <FormControlLabel
                  value="tutionFee"
                  control={<Radio />}
                  label="Tution Fee"
                />
                <FormControlLabel
                  value="hostelFee"
                  control={<Radio />}
                  label="Hostel Fee"
                />
                <FormControlLabel
                  value="scholarShip"
                  control={<Radio />}
                  label="ScholarShip"
                />
                <FormControlLabel
                  value="loanAndOthers"
                  control={<Radio />}
                  label="Loan and others"
                />
                <FormControlLabel
                  value="studentDetails"
                  control={<Radio />}
                  label="Student details"
                />
              </RadioGroup>
            </Box>
          </>
        ) : (
          console.log("MSI Selected")
        )}

        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ marginBottom: 2, paddingY: 2, fontSize: "1rem" }}
        >
          {fileType === "student" ? "Choose Student File" : "Choose MSI File"}
          <input
            type="file"
            id="file-upload-input"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {selectedFile && (
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Selected File: {selectedFile.name}
          </Typography>
        )}

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
      </Box>
    </Container>
  );
};

export default UploadPage;
