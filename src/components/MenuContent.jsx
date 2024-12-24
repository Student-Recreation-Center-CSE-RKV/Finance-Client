import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  {
    text: "Student Fee",
    icon: <ReportRoundedIcon />,
    path: "/Student/fee",
  },
  {
    text: "Bank Due Details",
    icon: <ListRoundedIcon />,
    path: "/Bank/Due",
  },
];

const secondaryListItems = [
  {
    text: "Add Due Number",
    icon: <PieChartRoundedIcon />,
    path: "/add/due",
  },
  {
    text: "Delete Due Number",
    icon: <PieChartRoundedIcon />,
    path: "/Delete/Due",
  },
  {
    text: "Edit Student Detail",
    icon: <BarChartRoundedIcon />,
    path: "/edit/student",
  },
  {
    text: "Exchange Installment",
    icon: <FeedbackRoundedIcon />,
    path: "/edit/installment",
  },
];

const tertiaryListItems = [
  { text: "Insights", icon: <RestaurantMenuRoundedIcon />, path: "/Insights" },
  {
    text: "See All Added Dues",
    icon: <EditRoundedIcon />,
    path: "/see/added/dues",
  },
  {
    text: "Upload Excel",
    icon: <RestaurantMenuRoundedIcon />,
    path: "/Upload",
  },
];

export default function MenuContent() {
  const [selectedPath, setSelectedPath] = React.useState("/");
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    setSelectedPath(path);
    navigate(path);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1 }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedPath === item.path}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedPath === item.path}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {tertiaryListItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedPath === item.path}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
