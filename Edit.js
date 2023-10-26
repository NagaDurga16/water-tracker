import React from "react";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { Box, Button, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Edit() {
  return (
    <Box>
      <Paper style={{ margin: "100px 500px 0 500px" }}>
        <Button
          style={{
            background: "rgb(35 137 219)",
            borderRadius: "50%",
            height: 45,
            width: 25,
          }}
        >
          {" "}
          <BloodtypeIcon sx={{ color: "white" }} />
        </Button>

        <p>
          {" "}
          <TextField label="Can capacity" />
        </p>
        <p>
          {" "}
          <TextField label="Price per can" />
        </p>
        <p>
          <TextField label="Date" defaultValue={new Date().toDateString()} />
        </p>
        <Button style={{ background: "rgb(35 137 219)", marginBottom: 20 }}>
          <div style={{ display: "flex", height: 50, marginTop: -17 }}>
            <p>
              <BloodtypeIcon sx={{ fill: "white" }} />
            </p>
            <h4 style={{ color: "white", width: 100 }}>WATER CAN</h4>
          </div>
        </Button>
      </Paper>
    </Box>
  );
}
