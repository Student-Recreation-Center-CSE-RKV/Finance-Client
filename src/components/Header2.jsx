import React from "react";
import Grid2 from "@mui/material/Grid2";
import { Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import image from "../assets/logo.png"

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  boxShadow: "none",
  margin: theme.spacing(2),
}));

export default function Header({data}) {
  const id =
    data && data.ID
      ? data.ID
      : data && data?.tutionFee && data?.tutionFee?.ID
      ? data.tutionFee.ID
      : data && data?.hostelFee && data?.hostelFee?.ID
      ? data.hostelFee.ID
      : data && data?.otherFee && data?.otherFee?.ID
      ? data.otherFee.ID
      : "";
  return (
    <div style={{display:"flex",justifyContent:"space-around",border:"1px solid black",alignItems:"center",marginTop:"50px"}}>
      <img src={image} style={{ width: "80px", height: "120px",margin:"30px" }} />
      <div style={{ width:"100%",display: "flex", justifyContent:"center"}}>
        
        <Grid2 container direction="column" alignItems={"center"}>
          <Grid2 container xs={5}>
            <Item>
              <Typography variant="h4" gutterBottom>
                Rajiv Gandhi University of Knowledge Technologies
              </Typography>
              <Typography variant="h4" gutterBottom>
                RGUKT IIIT - RK Valley
              </Typography>
              <Typography variant="h6">STUDENT FEES DETAILS</Typography>
              <div style={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>
              <Typography variant="h5" gutterBottom style={{border:"1px solid black",padding:"10px"}}>
                RKV ID No.
              </Typography>
              <Typography variant="h5" gutterBottom style={{border:"1px solid black",padding:"10px"}}>
                {id}
              </Typography>
              </div>
            </Item>
          </Grid2>
        </Grid2>
      </div>

    </div>
  );
}
