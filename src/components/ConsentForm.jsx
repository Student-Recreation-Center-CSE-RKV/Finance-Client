import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import jsPDF from "jspdf";
import logo from "../assets/logo.png";
// import financeSeal from "../assets/finance_seal.png"; // Import Finance Office Seal image
// import directorSignature from "../assets/director_signature.png"; // Import Director Signature image
// import financeHeadSignature from "../assets/finance_head_signature.png"; // Import Finance Head Signature image
import director from "../assets/director.png";
const ConsentForm = ({ studentName, studentId, isDisabled }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addImage(logo, "PNG", 5, 15, 17, 18);

    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text(
      "Rajiv Gandhi University of Knowledge and Technologies",
      doc.internal.pageSize.getWidth() / 2,
      20,
      { align: "center" }
    );

    doc.setFontSize(16);
    doc.setFont("times", "normal");
    doc.text("Finance Office", doc.internal.pageSize.getWidth() / 2, 30, {
      align: "center",
    });

    const today = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`Date: ${today}`, doc.internal.pageSize.getWidth() - 20, 40, {
      align: "right",
    });

    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.text("To Whom It May Concern,", 20, 50);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    const lineHeight = 2.5;
    doc.text(
      [
        `This is to certify that Mr./Ms. ${studentName}, bearing the Student ID number ${studentId}, `,
        `has successfully cleared all outstanding financial dues to the university as of ${today}. The `,
        `undersigned certifies that the student has met all financial obligations as per university policies `,
        `and no further dues are pending. This financial clearance is issued at the student's request for `,
        `official record purposes.`,
      ],
      20,
      60,
      { lineHeightFactor: lineHeight }
    );

    const yPosition = doc.internal.pageSize.getHeight() - 50;
    doc.addImage(director, "PNG", 20, yPosition, 60, 20);
    doc.addImage(director, "PNG", 90, yPosition, 60, 20);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Director Signature", 20, yPosition + 25);
    doc.text("Finance Head Signature", 90, yPosition + 25);
    doc.text("Finance Office Seal", 160, yPosition + 25);
    doc.save(`${studentName}_consent_form.pdf`);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 2, sm: 4 },
        border: "2px solid #3f51b5",
        borderRadius: 2,
        backgroundColor: "#e3f2fd",
        width: { xs: "90%", sm: "70%", md: "50%" },
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#3f51b5",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
        gutterBottom
      >
        No Due Certificate
      </Typography>
      <Box
        sx={{
          border: "1px solid #3f51b5",
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "#3f51b5" }}
        >
          Student Name: {studentName}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "#3f51b5" }}
        >
          Student ID: {studentId}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={generatePDF}
        disabled={isDisabled}
        sx={{
          backgroundColor: "#3f51b5",
          color: "#ffffff",
          "&:hover": { backgroundColor: "#303f9f" },
        }}
      >
        Generate No Due
      </Button>
    </Paper>
  );
};

export default ConsentForm;
