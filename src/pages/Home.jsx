import React from "react";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box width={"100%"}>
      <Stack>
        <Faq />
        <Footer />
      </Stack>
    </Box>
  );
}
