import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function CustomAccordion({ faq }) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(faq);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack mt={3}>
      <Accordion
        elevation={0}
        sx={{ border: "1px solid #1976d2", padding: "5px" }}
        expanded={expanded === faq.index}
        onChange={handleChange(faq.index)}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ flexShrink: 0 }}>
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            m={1.5}
            fontWeight={"bold"}
            variant="h6"
            textAlign={"center"}
            sx={{ flexShrink: 0 }}
          >
            Go to the Upload section in the Navbar and select the option that
            you want upload the file you want in the below format
          </Typography>
          {faq.file && faq.file.endsWith(".mp4") ? (
            <video width="100%" controls>
              <source src={faq.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            faq.file && <img src={faq.file} alt="hint" width={"100%"} />
          )}
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
