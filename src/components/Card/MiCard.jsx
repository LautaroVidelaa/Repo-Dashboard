import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import CardEstado from "./CardEstado";

function MiCard({ nombre, club, imagen, estado }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 180, objectFit: "cover" }}
        image={imagen}
        alt={nombre}
      />

      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography>{club}</Typography>

        <CardEstado estado={estado} />
      </CardContent>
    </Card>
  );
}

export default MiCard;