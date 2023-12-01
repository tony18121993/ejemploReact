import "../styles.css";
import { useLocation } from "react-router-dom";
import { ProductosGrid } from "../ProductosGrid";

export function Filtro() {
  const location = useLocation();
  console.log(location);
  const busqueda = Parametro(location);
  console.log(busqueda);
  return (
    <div className="App">
      <h1>Productos</h1>
      <h2>Filtro de Productos</h2>
      <ProductosGrid filt={busqueda} />
    </div>
  );
}

function Parametro(objeto) {
  let parametro = objeto.search.split("?search=")[1];
  return parametro;
}
