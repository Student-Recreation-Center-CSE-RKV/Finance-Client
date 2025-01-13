import * as React from "react";
import { useLocation } from "react-router-dom";
import StyledBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

export default function NavbarBreadcrumbs() {
  const location = useLocation();

  const getBreadcrumbs = (path) => {
    switch (path) {
      case "/":
        return ["Dashboard", "Home"];
      case "/Student/fee":
        return ["Dashboard", "Student", "Student Fee"];
      case "/edit/student-details":
        return ["Dashboard", "Student", "Edit"];
      case "/allocate/fee":
        return ["Dashboard", "Fee", "Allocate"];
      case "/bank/due-details":
        return ["Dashboard", "Bank Due"];
      case "/add/due":
        return ["Dashboard", "Fee", "Add Due"];
      case "/transfer/installment":
        return ["Dashboard", "Fee", "Edit Installment"];
      case "/Delete/Due":
        return ["Dashboard", "Fee", "Delete Due"];
      case "/Insights":
        return ["Dashboard", "Fee", "Insights"];
      case "/added/dues":
        return ["Dashboard", "Fee", "Added Dues"];
      case "/preview/added/dues":
        return ["Dashboard", "Fee", "preview Added Dues"];
      case "/Upload":
        return ["Dashboard", "Upload", "upload files"];
      case "/Auth/Login":
        return ["Dashboard", "Auth", "Login"];
      case "/edit/student-fee":
        return ["Dashboard", "Fee", "Edit"];
      default:
        return ["Dashboard", "Unknown"];
    }
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {breadcrumbs.map((text, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            color:
              index === breadcrumbs.length - 1
                ? "text.primary"
                : "text.secondary",
            fontWeight: index === breadcrumbs.length - 1 ? 600 : 400,
          }}
        >
          {text}
        </Typography>
      ))}
    </StyledBreadcrumbs>
  );
}
