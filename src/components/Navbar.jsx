import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">
          App de jugadores
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;