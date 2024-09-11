import React from "react";
import Search from "../components/Search";
export default function Home({ triggerSnackbar, setMessage }) {
  return (
    <>
      <Search triggerSnackbar={triggerSnackbar} setMessage={setMessage} />
    </>
  );
}
