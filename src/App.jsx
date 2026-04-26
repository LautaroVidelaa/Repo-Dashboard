import MiCard from "./components/Card/MiCard";
import { Grid } from "@mui/material";

function App() {
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
  ];

  return (
    <Grid container spacing={2}>
      {jugadores.map((jugador, index) => (
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
  );
}

export default App;