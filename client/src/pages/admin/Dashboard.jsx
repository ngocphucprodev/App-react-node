import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RoutesDasboard from "./Routes";
import { Grid } from "@mui/material";
import Menu from "./Menu";
import { padding } from "@mui/system";
const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid
          item
          lg={2}
          sx={{
            position: "absolute",
            zIndex: "9999",
            display: { md: "block" },
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item md={12} sx={{ pt: 10 }}>
          <Menu />
          <RoutesDasboard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
