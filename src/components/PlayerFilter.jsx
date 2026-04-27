import React, { useState } from "react";
import Navbar from "./Navbar";
import MiCard from "./MiCard";
import { Grid, Box } from "@mui/material";

function PlayerFilter() {
  const [filtroEstado, setFiltroEstado] = useState("Todos");

  const jugadoresFiltrados = jugadoresMock.filter((jugador) => {
    if (filtroEstado === "Todos") {
      return true;
    }
    return jugador.estado === filtroEstado; 
  });

  return (
    <Box>
      <Navbar filtroEstado={filtroEstado} setFiltroEstado={setFiltroEstado} />

      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          {jugadoresFiltrados.map((jugador) => (
            <Grid item xs={12} sm={6} md={4} key={jugador.id}>
              <MiCard
                nombre={jugador.nombre}
                club={jugador.club}
                imagen={jugador.imagen}
                estado={jugador.estado}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardJugadores;