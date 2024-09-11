import React, { useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import StudentDetails from "../components/StudentDetails";
import FeeDetails from "../components/FeeDetails";
import CustomizedGrid from "../components/CustomizedGrid";
export default function Home({ triggerSnackbar, setMessage }) {
  const [data, setData] = useState({});
  // const [click, setClick] = useState(false);
  // const triggerClick = () => {
  //   setClick(true);
  // };
  const changeData = (e) => {
    setData(e);
  };
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Search
        triggerSnackbar={triggerSnackbar}
        setMessage={setMessage}
        changeData={changeData}
      />
      {Object.keys(data).length !== 0 && (
        <>
          <Header />
          <CustomizedGrid data={data.student.student} />
          <StudentDetails data={data.student.student} />
          <FeeDetails data={data} />
        </>
      )}
    </>
  );
}
