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
        return ["Dashboard", "Student Fee"];
      case "/Bank/Due":
        return ["Dashboard", "Bank Due"];
      case "/add/due":
        return ["Dashboard", "Add Due"];
      case "/edit/student":
        return ["Dashboard", "Edit Student"];
      case "/edit/installment":
        return ["Dashboard", "Edit Installment"];
      case "/Delete/Due":
        return ["Dashboard", "Delete Due"];
      case "/analytics/feedback":
        return ["Dashboard", "Analytics", "Feedback Analytics"];
      case "/Insights":
        return ["Dashboard", "Insights"];
      case "/added/dues":
        return ["Dashboard", "Added Dues"];
      case "/see/added/dues":
        return ["Dashboard", "See Added Dues"];
      case "/upload":
        return ["Dashboard", "upload files"];
      case "/Auth/Login":
        return ["Dashboard", "Auth", "Login"];
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
