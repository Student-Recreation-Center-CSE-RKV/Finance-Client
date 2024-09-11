import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomizedSnackbar from "./components/Snackbar";
import LoginForm from './pages/Login';
import UploadPage from "./pages/Upload";
function App() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
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
        <Route
          path="/"
          element={
            <Home triggerSnackbar={showSnackbar} setMessage={setMessage} />
          }
        />
        <Route
          path="/Bank/Due"
          element={
            <Home triggerSnackbar={showSnackbar} setMessage={setMessage} />
          }
        />
        <Route
          path="/Upload"
          element={
            <UploadPage triggerSnackbar={showSnackbar} setMessage={setMessage} />
          }
        />
        <Route
          path="/Auth/Login"
          element={
            <LoginForm/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
