import { Box, Button, Grid, Menu } from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import EventIcon from "@mui/icons-material/Event";
import OpacityIcon from "@mui/icons-material/Opacity";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import { blue } from "@mui/material/colors";
import Menubar from "./Menu";

export default function Watertracker() {
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState("0");
  const [liters, setLiters] = useState("0");
  const [balance, setBalance] = useState("0");
  // const addWatercan(){

  // }
  return (
    <Grid>
      <p style={{ textAlign: "left" }}>
        <Menubar />
      </p>
      <Box sx={{ height: 600, width: 500, margin: 10, marginLeft: 50 }}>
        <Grid container style={{ margin: 20 }}>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: 5, margin: 10 }}>
              <CalendarMonthIcon sx={{ fill: "deeppink", marginRight: 30 }} />
              <div style={{ display: "flex", paddingLeft: 120 }}>
                <p>{month}</p>
                <p>
                  {" "}
                  <WaterDropIcon sx={{ fill: "blue" }} />
                </p>
              </div>
              <p>This month</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: 5, margin: 10 }}>
              <EventIcon sx={{ fill: "deeppink", marginRight: 30 }} />
              <div style={{ display: "flex", paddingLeft: 120 }}>
                <p>{day}</p>
                <p>
                  <WaterDropIcon sx={{ fill: "blue" }} />
                </p>
              </div>
              <p>Day</p>
            </Paper>
          </Grid>
        </Grid>
        <Grid container style={{ margin: 20 }}>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: 5, margin: 10 }}>
              <OpacityIcon sx={{ fill: "blue", marginRight: 30 }} />
              <div style={{ display: "flex", paddingLeft: 120 }}>
                <p>{liters}</p>
                <h5 style={{ color: blue }}>L</h5>
              </div>
              <p>Person/Day</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: 5, margin: 10 }}>
              <AccountBalanceWalletIcon
                sx={{ fill: "green", marginRight: 30 }}
              />
              <div style={{ display: "flex", paddingLeft: 120 }}>
                <p>{balance}</p>
                <p>
                  <CurrencyRupeeIcon sx={{ fill: "green" }} />
                </p>
              </div>
              <p>Balance</p>
            </Paper>
          </Grid>
        </Grid>

        <Button
          style={{
            background: "rgb(35 137 219)",
            color: "white",
            borderRadius: 50,
          }}
        >
          <WaterDropIcon />
          WATER CAN
        </Button>
        <Button
          style={{
            background: "rgb(35 137 219)",
            color: "white",
            borderRadius: "50%",
            margin: 10,
          }}
        >
          <ModeEditRoundedIcon />
        </Button>
      </Box>
    </Grid>
  );
}
