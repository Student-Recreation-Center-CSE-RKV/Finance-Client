import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
}));
export default function CustomizedGrid({ data }) {
  return (
    <>
      <Grid2 container xs={12} item direction={"column"} alignItems={"center"}>
        <Item
          sx={{
            width: "50%",
            boxShadow: 3,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h6">RKV ID No: {data && data.ID}</Typography>
        </Item>
      </Grid2>
    </>
  );
}
