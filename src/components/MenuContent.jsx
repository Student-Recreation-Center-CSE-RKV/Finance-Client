import * as React from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import {
  HomeRoundedIcon,
  PieChartRoundedIcon,
  EditRoundedIcon,
  AdminPanelSettings,
  CommentBank,
  CurrencyExchange,
  Upload,
  People,
} from "./icons/CustomIcons";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  {
    text: "Student Fee",
    icon: <People />,
    path: "/Student/fee",
  },
];

const secondaryListItems = [
  {
    text: "Edit Student Detail",
    icon: <AdminPanelSettings />,
    path: "/edit/student-details",
  },
  {
    text: "Edit Student Fee",
    icon: <AdminPanelSettings />,
    path: "/edit/student-fee",
  },
  {
    text: "Assign Amount",
    icon: <AdminPanelSettings />,
    path: "/allocate/fee",
  },
];

const tertiaryListItems = [
  {
    text: "Bank Due Details",
    icon: <CommentBank />,
    path: "/bank/due-details",
  },
  {
    text: "Add Due Number",
    icon: <CommentBank />,
    path: "/add/due",
  },
  {
    text: "Delete Due Number",
    icon: <CommentBank />,
    path: "/Delete/Due",
  },
  {
    text: "Exchange Installment",
    icon: <CurrencyExchange />,
    path: "/transfer/installment",
  },
];

const otherListItems = [
  { text: "Insights", icon: <PieChartRoundedIcon />, path: "/Insights" },
  {
    text: "See All Added Dues",
    icon: <EditRoundedIcon />,
    path: "preview/added/dues",
  },
  {
    text: "Upload Excel",
    icon: <Upload />,
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
      <List dense>
        {otherListItems.map((item) => (
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
