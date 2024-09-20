import React, { useEffect, useState } from "react";
import studentsShared from "../shared/StudentsShared";
import TotalCharts from "../components/TotalCharts";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
export default function Home() {
  const [students, setStudents] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    getAllStudents();
  });

  const getAllStudents = async () => {
    const res = await studentsShared.getALlStudents();
    setStudents(res.data);
    console.log(res.data[0].sch.academicYears);
  };

  return (
    <>
      {" "}
      {students ? (
        <motion.div
          initial={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
          }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
        >
          <TotalCharts data={students} />
        </motion.div>
      ) : (
        <Loader />
      )}
    </>
  );
}
