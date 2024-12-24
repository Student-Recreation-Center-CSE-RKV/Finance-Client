// Sections.jsx
import React from "react";
import { Box, Typography, Grid2, Card, Stack } from "@mui/material";
import Accordion2 from "./Accordion2.jsx";
import Accordion3 from "./Accordion3.jsx";
const feeStructure = [
  {
    year: "PUC",
    component: <Accordion2 />,
  },
  {
    year: "Engineering",
    component: <Accordion3 />,
  },
];

const Sections = () => {
  return (
    <Box width={"100%"}>
      <Typography
        variant="h4"
        align="center"
        fontWeight={"semi-bold"}
        mt={3}
        mb={3}
      >
        College Fee Structure
      </Typography>
      <Card elevation={5}>
        <Stack container spacing={5} p={3}>
          {feeStructure.map((fee, index) => (
            <Grid2 item xs={12} md={6} key={index}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#003366",
                  textAlign: "center",
                }}
              >
                {fee.year}
              </Typography>
              {fee.component}
            </Grid2>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

export default Sections;
