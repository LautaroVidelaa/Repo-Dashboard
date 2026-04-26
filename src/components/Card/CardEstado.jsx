import { Button } from "@mui/material";
import { useState } from "react";

function CardEstado({ estado }) {
  const [mostrar, setMostrar] = useState(false);

  const toggleEstado = () => {
    setMostrar(!mostrar);
  };

  const getColor = () => {
    if (estado === "activo") return "green";
    if (estado === "lesionado") return "orange";
    if (estado === "retirado") return "red";
    return "gray";
  };

  const getTexto = () => {
    if (estado === "activo") return "Activo";
    if (estado === "lesionado") return "Lesionado";
    if (estado === "retirado") return "Retirado";
    return "Estado";
  };

  return (
    <Button
      variant="contained"
      onClick={toggleEstado}
      sx={{
        marginTop: 2,
        backgroundColor: mostrar ? getColor() : "gray",
      }}
    >
      {mostrar ? getTexto() : "Estado"}
    </Button>
  );
}

export default CardEstado;