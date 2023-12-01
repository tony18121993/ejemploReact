import productos from "../productos.json";
import styles from "../ProductCard.module.css";
import { useParams } from "react-router-dom";
export function DetalleProducto() {
  let { productoID } = useParams();
  
  const product = productos.find((elemento) => elemento.id == productoID);
  
  return (
    <div className={styles.cardprincipal}>
      <div>
        <img className={styles.contenedorimagen} src={product.image} alt="" />
      </div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p className={styles.precio}>{product.price}</p>
    </div>
  );
}
