import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";

function Navbar({ filtroEstado, setFiltroEstado }) {
  
  const handleFiltroCambio = (event) => {
    setFiltroEstado(event.target.value);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" className="logo">
          App de jugadores
        </Typography>

        <Box sx={{ minWidth: 150, bgcolor: "white", borderRadius: 1 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="filtro-estado-label">Estado</InputLabel>
            <Select
              labelId="filtro-estado-label"
              value={filtroEstado}
              label="Estado"
              onChange={handleFiltroCambio}>
              <MenuItem value="todos">Todos</MenuItem>
              <MenuItem value="activo">Activo</MenuItem>
              <MenuItem value="lesionado">Lesionado</MenuItem>
              <MenuItem value="retirado">Retirado</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;