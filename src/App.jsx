import MiCard from "./components/Card/MiCard";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [filtroEstado, setFiltroEstado] = useState("todos");

  const jugadores = [
    {
      nombre: "Lionel Messi",
      club: "Inter Miami",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRoDFjN5BrMPQcVik7b0lKPR1kfSFh8V9og&s",
      estado: "activo",
    },
    {
      nombre: "Neymar",
      club: "Santos",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sh1H_T_7mxCu5mT0sfeyauh73OYNrHfp7A&s",
      estado: "lesionado",
    },
    {
      nombre: "Zidane",
      club: "Sin Club",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLiRJXqyDCocbeKw_xuxohJLDSM3gZoJXIw&s",
      estado: "retirado",
    },
    {
      nombre: "Cristiano Ronaldo",
      club: "Al-Nassr",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      estado: "activo",
    },
    {
      nombre: "Zlatan Ibrahimovic",
      club: "Sin club",
      imagen: "https://www.planetsport.com/image-library/land/1200/z/zlatan-ibrahimovic-ac-milan-apr2022.webp",
      estado: "retirado",
    },
     {
      nombre: "Paul Pogba",
      club: "Monaco",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_rIKDP2JpOEhJYZS3cwCzLHmnvSdjQha5Q&s",
      estado: "lesionado",
    },
     {
      nombre: "Manuel Neuer",
      club: "Bayern Munich",
      imagen: "https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/2018-fif-world-cup--manuel-neuer-goal-keeper-germany_0.jpg?itok=CAmIuJyU",
      estado: "activo",
    },
     {
      nombre: "Gustavo Costas",
      club: "Racing Club",
      imagen: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQdJpCDsKPV0XFA1BvnvKncvut4szycelvV52cuN9Q9bUtkhXXuBfJuRA70cRY9vP7pFGUE-syRHD40QCmJPb0VDFrM7DK8x36tThd6r2ak7FR1DxfZN5Mw9JmvsSeR62p8DBVZPX_48lMe&s=19",
      estado: "retirado",
    }, {
      nombre: "Maradona",
      club: "Boca jr",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/960px-Maradona-Mundial_86_con_la_copa.JPG",
      estado: "retirado",
    },
     {
      nombre: "Ronaldinho",
      club: "Sin club",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4Ty--nsOHTxUEnrdqBxN41gnlJGTBNz1hA&s",
      estado: "retirado",
    },
  ];

  const jugadoresFiltrados = jugadores.filter((jugador) => {
    if (filtroEstado === "todos") return true;
    return jugador.estado === filtroEstado;
  });

  return (
    <>
      <Navbar filtroEstado={filtroEstado} setFiltroEstado={setFiltroEstado} />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {jugadoresFiltrados.map((jugador, index) => (
          <Grid item xs={12} md={4} key={index}>
            <MiCard
              nombre={jugador.nombre}
              club={jugador.club}
              imagen={jugador.imagen}
              estado={jugador.estado}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;