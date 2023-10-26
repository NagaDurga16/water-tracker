import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ReorderIcon from "@mui/icons-material/Reorder";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Grid, List, ListItem, Typography, Button } from "@mui/material";
export default function Menubar() {
  const [opening, setOpening] = useState(false);
  const openingHandler = () => {
    let opn = true;
    setOpening(opn);
  };
  const onClose = () => {
    let cls = false;
    setOpening(cls);
  };
  return (
    <Grid>
      <ReorderIcon onClick={openingHandler} />
      <Drawer open={opening} onClose={onClose}>
        <div style={{ display: "flex" }}>
          <p style={{ marginTop: "25px" }}>
            <Button
              style={{
                background: "rgb(35 137 219)",
                borderRadius: "50%",
                height: 45,
                width: 20,
              }}
            >
              <WaterDropIcon style={{ color: "white" }} />
            </Button>
          </p>
          <p style={{ marginTop: 0 }}>
            <h2>Bubbles</h2>

            <p style={{ marginTop: -15, fontSize: 10 }}>Water Can Traker</p>
          </p>
        </div>
        <List>
          <ListItem>
            <Typography>Home</Typography>
          </ListItem>
          <ListItem>
            <Typography>History</Typography>
          </ListItem>
          <ListItem>
            <Typography>Transactions</Typography>
          </ListItem>
          <ListItem>
            <Typography>Settings</Typography>
          </ListItem>
          <ListItem>
            <Typography>Advanced</Typography>
          </ListItem>
        </List>
      </Drawer>
    </Grid>
  );
}
