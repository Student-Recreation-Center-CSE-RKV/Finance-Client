// import React, { useState, useEffect } from 'react';
// import { Box, MobileStepper, Button } from '@mui/material';
// // import SwipeableViews from 'react-swipeable-views';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import slide1 from '../assets/slide1.png'; 
// import slide2 from '../assets/slide2.png';
// import slide3 from '../assets/slide3.png';
// import slide4 from '../assets/slide4.png';

// import { div } from "framer-motion/client"

// const images = [
//     {
//         label: 'Slide 1',
//         imgPath: slide1,
//     },
//     {
//         label: 'Slide 2',
//         imgPath: slide2,
//     },
//     {
//         label: 'Slide 3',
//         imgPath: slide3,
//     },
//     {
//         label: 'Slide 4',
//         imgPath: slide4,
//     },
// ];

// const Carousel = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const maxSteps = images.length;

//     // Automatic sliding effect
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setActiveStep((prevActiveStep) =>
//                 prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
//             );
//         }, 3000); // Change slide every 3 seconds

//         return () => {
//             clearInterval(timer); // Cleanup the interval on component unmount
//         };
//     }, [maxSteps]);

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) =>
//             prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
//         );
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) =>
//             prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
//         );
//     };

//     const handleStepChange = (step) => {
//         setActiveStep(step);
//     };

//     return (
//         <Box sx={{ flexGrow: 1, maxWidth: '100%', overflow: 'hidden' }}>
//             <SwipeableViews
//                 axis="x"
//                 index={activeStep}
//                 onChangeIndex={handleStepChange}
//                 enableMouseEvents
//             >
//                 {images.map((step) => (
//                     <Box
//                         key={step.label}
//                         component="img"
//                         sx={{
//                             display: 'block',
//                             width: '100vw',
//                             height: '340px',
//                             objectFit: 'cover',
//                         }}
//                         src={step.imgPath}
//                         alt={step.label}
//                     />
//                 ))}
//             </SwipeableViews>

//             <MobileStepper
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 nextButton={
//                     <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//                         Next
//                         <KeyboardArrowRight />
//                     </Button>
//                 }
//                 backButton={
//                     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                         <KeyboardArrowLeft />
//                         Back
//                     </Button>
//                 }
//                 sx={{ justifyContent: 'space-between', width: '100vw', background: 'transparent' }}
//             />
//         </Box>
//     );
// };

// export default Carousel;

export default function Carousel(){
    return(
        <div></div>
    )

}