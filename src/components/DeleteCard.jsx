import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
export default function DeleteCard({ item, selectDue, open, setOpen }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        key={item._id}
        disableGutters
        secondaryAction={
          <IconButton
            aria-label="comment"
            onClick={() => {
              selectDue(item);
              setOpen(!open);
            }}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemText
          primary={`Reference No ${item.ReceiptNo} with Amount ${item.Amount}`}
        />
      </ListItem>
    </List>
  );
}
