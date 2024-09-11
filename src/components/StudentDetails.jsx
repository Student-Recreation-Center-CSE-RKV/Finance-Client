import Grid2 from "@mui/material/Grid2";
import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "left",
}));
export default function StudentDetails({ data }) {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "1rem", padding: "1rem" }}>
        <Grid2 container xs={12} direction={"column"} alignItems={"center"}>
          <Grid2
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              boxShadow: 3,
              width: "50%",
            }}
            spacing={5}
          >
            <Item sx={{ boxShadow: "none" }}>
              <Grid2 item>
                <Typography variant="h7">
                  Student: {data.StudentName}
                </Typography>
              </Grid2>
              <Grid2 item>
                <Typography variant="h7">Batch: {data.BATCH}</Typography>
              </Grid2>
            </Item>
            <Item sx={{ boxShadow: "none" }}>
              <Grid2 item>
                <Typography variant="h7">
                  Father's Name: {data.FatherName}
                </Typography>
              </Grid2>
              <Grid2 item>
                <Typography variant="h7">Gender: {data.Gender}</Typography>
              </Grid2>
              <Grid2 item>
                <Typography variant="h7">Category: {data.Category}</Typography>
              </Grid2>
            </Item>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
