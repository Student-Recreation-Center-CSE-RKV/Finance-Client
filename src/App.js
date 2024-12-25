import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StudentFee from "./pages/StudentFee";
import CustomizedSnackbar from "./components/Snackbar";
import LoginForm from "./pages/Login";
import UploadPage from "./pages/Upload";
import BankDue from "./pages/BankDue";
import Home from "./pages/Home";
import TotalCharts from "./components/TotalCharts";
import EditStudent from "./components/EditStudent";
import EditInstallment from "./components/EditInstallment";
import AddDue from "./components/AddDue";
import SeeAddedDues from "./components/SeeAddedDues";
import { AuthProvider } from "./pages/AuthContext";
// import ConsentForm from "./components/ConsentForm";

import "./App.css";
import Dashboard from "./pages/DashBoard";
import DeleteDue from "./components/DeleteDue";
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
    <AuthProvider>
      <div className="App">
        <CustomizedSnackbar
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          message={message}
        />
        <Routes>
          <Route path="/" element={<Dashboard />}>
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
                <BankDue
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/see/added/dues"
              element={
                <SeeAddedDues
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/edit/student"
              element={
                <EditStudent
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/add/due"
              element={
                <AddDue
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/Delete/Due"
              element={
                <DeleteDue
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/edit/installment"
              element={
                <EditInstallment
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
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
            <Route path="/Insights" element={<TotalCharts />} />
            <Route path="/Auth/Login" element={<LoginForm />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
