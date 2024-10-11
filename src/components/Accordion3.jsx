import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordion3() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange =
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    const feeStructure = [
        {
            title: "Hostel Fee",
            amount: "35000",
            description: "lorem ipsum",
        },
        {
            title: "Tution Fee",
            amount: "60000",
            description: "lorem ipsum",
        },
    ];

    return (
        <div>
            {feeStructure.map((fee, index) => (
                <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}bh-content`}
                        id={`panel${index + 1}bh-header`}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {fee.title} {/* Assuming fee has a title property */}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            {fee.amount} Rs. {/* Assuming fee has an amount property */}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {fee.description} {/* Assuming fee has a description property */}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}
