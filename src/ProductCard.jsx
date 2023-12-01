import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const mostrar = (id) => {
  alert("el id del producto es " + id);
};

export function ProductoCard({ producto }) {
  return (
    <li className={styles.cardprincipal} key={producto.id}>
      <div>
        <img className={styles.contenedorimagen} src={producto.image} alt="" />
      </div>
      <p>{producto.title}</p>
      <p>{producto.description}</p>
      {producto.price > 100 ? (
        <strong>
          <p className={styles.precio}>{producto.price}</p>
        </strong>
      ) : (
        <p className={styles.precio}>{producto.price}</p>
      )}
      {producto.price > 100 && "✔"}
      {/* <button onClick={() => mostrar(producto.id)}>Mostrar</button> */}
      <Link to={"/detalle/" + producto.id}>
        <button>Detalle</button>
      </Link>
    </li>
  );
}
