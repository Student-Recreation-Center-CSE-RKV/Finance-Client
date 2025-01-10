import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StudentFee from "./pages/StudentFee";
import CustomizedSnackbar from "./components/Snackbar";
import LoginForm from "./pages/Login";
import UploadPage from "./pages/Upload";
import BankDue from "./pages/BankDue";
import Home from "./pages/Home";
import TotalCharts from "./components/TotalCharts";
import EditStudentDetails from "./components/EditStudentDetails";
import TransferInstallments from "./components/TransferInstallment";
import EditStudentFee from "./components/EditStudentFee";
import AddDue from "./components/AddDue";
import SeeAddedDues from "./components/SeeAddedDues";
import { AuthProvider } from "./pages/AuthContext";

import "./App.css";
import Dashboard from "./pages/DashBoard";
import DeleteDue from "./components/DeleteDue";
function App() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState({
    msg: "",
    type: "",
  });
  const showSnackbar = () => {
    setOpenSnackbar(true);
  };

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
              path="preview/added/dues"
              element={
                <SeeAddedDues
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/edit/student/details"
              element={
                <EditStudentDetails
                  triggerSnackbar={showSnackbar}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path="/edit/student/fee"
              element={
                <EditStudentFee
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
              path="/transfer/installment"
              element={
                <TransferInstallments
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
