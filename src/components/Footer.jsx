import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import src_logo from "../assets/src_logo.png";

const Footer = () => {
  return (
    <Box textAlign={"center"}>
      <Typography variant="body2" m={3}>
        For more information or to request assistance, please contact the
        Finance Office at{" "}
        <Typography variant="div" color="primary">
          Acedemic Block - 1
        </Typography>
        .
      </Typography>

      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1" color="primary">
          Made by
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="h6" fontWeight={"bold"}>
            TEAM SRC
          </Typography>
          <Box
            component="img"
            src={src_logo}
            alt="SRC Logo"
            sx={{
              height: "50px",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
