import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  boxShadow: "none",
  margin: theme.spacing(2), // Add margin if you want space around the text
}));

export default function Header() {
  return (
    <>
      <Grid2 container direction="column" alignItems={"center"}> 
        <Grid2 container xs={5}>
          <Item>
            <Typography variant="h4" gutterBottom>
              Rajiv Gandhi University of Knowledge Technologies
            </Typography>
            <Typography variant="h5" gutterBottom>
              RGUKT IIIT - RK Valley
            </Typography>
            <Typography variant="h6">STUDENT FEES DETAILS</Typography>
          </Item>
        </Grid2>
      </Grid2>
    </>
  );
}
