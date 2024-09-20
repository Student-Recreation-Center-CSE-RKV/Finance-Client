import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import StudentFee from "./pages/StudentFee";
import CustomizedSnackbar from "./components/Snackbar";
import LoginForm from "./pages/Login";
import UploadPage from "./pages/Upload";
import BankDue from "./pages/BankDue";
import Home from "./pages/Home";
import "./App.css";
function App() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState({
    msg: "",
    type: "",
  });
  // Function to trigger Snackbar
  const showSnackbar = () => {
    setOpenSnackbar(true);
  };

  // Function to handle closing the Snackbar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="App">
      <Navbar />
      <CustomizedSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={message}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Student/fee"
          element={
            <StudentFee
              triggerSnackbar={showSnackbar}
              setMessage={setMessage}
            />
          }
        />
        <Route
          path="/Bank/Due"
          element={
            <BankDue triggerSnackbar={showSnackbar} setMessage={setMessage} />
          }
        />
        <Route
          path="/Upload"
          element={
            <UploadPage
              triggerSnackbar={showSnackbar}
              setMessage={setMessage}
            />
          }
        />
        <Route path="/Auth/Login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
