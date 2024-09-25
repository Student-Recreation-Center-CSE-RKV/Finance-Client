import React, { useEffect, useState } from "react";

import Loader from "../components/Loader";
import { motion } from "framer-motion";
export default function Home() {
<<<<<<< Updated upstream
=======
  const [students, setStudents] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    getAllStudents();
  },[]);

  const getAllStudents = async () => {
    try {
      const res = await studentsShared.getALlStudents();

      // Check if res.data exists and is an array
      if (res && res.data && Array.isArray(res.data)) {
        setStudents(res.data);

        // Defensive check before logging sch.academicYears
        if (res.data[0]?.sch?.academicYears) {
          console.log(res.data[0].sch.academicYears);
        } else {
          console.error("sch or academicYears is undefined.");
        }
      } else {
        console.error("Invalid data structure:", res);
      }
    } catch (error) {
      console.error("Error fetching students data:", error);
    }
  };

>>>>>>> Stashed changes
  return (
    <>
      
    </>
  );
}
