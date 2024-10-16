import React from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import jsPDF from 'jspdf';
import logo from "../assets/logo.png"; // Import your logo image
// import financeSeal from "../assets/finance_seal.png"; // Import Finance Office Seal image
// import directorSignature from "../assets/director_signature.png"; // Import Director Signature image
// import financeHeadSignature from "../assets/finance_head_signature.png"; // Import Finance Head Signature image
import director from "../assets/director.png";
const ConsentForm = ({ studentName, studentId, isDisabled }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add Logo at the top
    doc.addImage(logo, 'PNG', 5, 15, 17, 18); // Adjust the position and size accordingly

    // University Name (Bold and Centered)
    doc.setFontSize(18);
    doc.setFont('times', 'bold');
    doc.text('Rajiv Gandhi University of Knowledge and Technologies', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
    
    // Subheading (Centered)
    doc.setFontSize(16);
    doc.setFont('times', 'normal');
    doc.text('Finance Office', doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

    // Date (Right-aligned)
    const today = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setFont('times', 'normal');
    doc.text(`Date: ${today}`, doc.internal.pageSize.getWidth() - 20, 40, { align: 'right' });

    // Formal Declaration Heading
    doc.setFontSize(14);
    doc.setFont('times', 'bold');
    doc.text('To Whom It May Concern,', 20, 50);

    // Body Content (Formatted as a paragraph with line spacing)
    doc.setFontSize(12);
    doc.setFont('times', 'normal');
    const lineHeight = 2.5; // Set line height factor
    doc.text(
      [
        `This is to certify that Mr./Ms. ${studentName}, bearing the Student ID number ${studentId}, `,
        `has successfully cleared all outstanding financial dues to the university as of ${today}. The `,
        `undersigned certifies that the student has met all financial obligations as per university policies `,
        `and no further dues are pending. This financial clearance is issued at the student's request for `,
        `official record purposes.`
      ], 
      20, 60,
      { lineHeightFactor: lineHeight }
    );

    // Footer with signatures and positions (moved to bottom)
    const yPosition = doc.internal.pageSize.getHeight() - 50; // Adjust Y-position to place it towards the bottom of the page

    // Add signature images
    // doc.addImage(, 'PNG', 20, yPosition, 50, 20); // Finance Office Seal
    doc.addImage(director, 'PNG', 20, yPosition, 60, 20); // Director Signature
    doc.addImage(director, 'PNG', 90, yPosition, 60, 20); // Finance Head Signature

    // Signature labels
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.text('Director Signature', 20, yPosition + 25); // Director Signature label
    doc.text('Finance Head Signature', 90, yPosition + 25); // Finance Head Signature label
    doc.text('Finance Office Seal', 160, yPosition + 25); // Finance Office Seal label
    // Save the generated PDF
    doc.save(`${studentName}_consent_form.pdf`);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f5f5f5' 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: { xs: 2, sm: 4 }, // Responsive padding
          border: '2px solid #3f51b5', 
          borderRadius: 2, 
          backgroundColor: '#e3f2fd', 
          width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" sx={{ color: '#3f51b5', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }} gutterBottom>
          Financial Clearance Consent Form
        </Typography>
        <Typography variant="body1" sx={{ color: '#4a4a4a', marginBottom: 2 }}>
          Click the button below to generate a formal Financial Clearance Certificate for the student.
        </Typography>
        <Box 
          sx={{ 
            border: '1px solid #3f51b5', 
            padding: 2, 
            marginBottom: 2, 
            borderRadius: 2, 
            backgroundColor: '#ffffff' 
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Student Name: {studentName}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Student ID: {studentId}
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          onClick={generatePDF} 
          disabled={isDisabled} 
          sx={{ 
            backgroundColor: '#3f51b5', 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#303f9f' } 
          }}
        >
          Generate Consent Form
        </Button>
      </Paper>
    </Box>
  );
};

export default ConsentForm;
