import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

export default function Accordion2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const feeStructure = [
    {
      title: "Hostel Fee",
      amount: "14000",
      description: "lorem ipsum",
    },
    {
      title: "Tution Fee",
      amount: "40000",
      description: "lorem ipsum",
    },
  ];

  return (
    <Stack>
      {feeStructure.map((fee, index) => (
        <Accordion
          elevation={0}
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {fee.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {fee.amount} Rs.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{fee.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}
