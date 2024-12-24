import React from "react";
import Carousel from "../components/Carousel";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import FinanceOfficeOverview from "../components/FinanceOfficeOverview";

export default function Home() {
  return (
    <>
      <Carousel />
      <Sections />
      <FinanceOfficeOverview />
      <Footer />
    </>
  );
}
