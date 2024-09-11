import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbar({ open, onClose, message }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert
          onClose={onClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
