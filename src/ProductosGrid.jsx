import productos from "./productos.json";
import styles from "./ProductosGrid.module.css";
import { ProductoCard } from "./ProductCard";
export function ProductosGrid({ filt }) {
  
  console.log(filt);
  let filtrados = productos.filter((producto) => producto.title.includes(filt));
  let contador=productos.length;
  let contador1=filtrados.length;
  return (
    <>
      <div className="lista">
      {filt == null || filt == "" ? <p>El numero de articulos es: {contador}</p>:<p>El numero de articulos es: {contador1}</p>}
        <ul className={styles.contenedor}>
          {filt == null || filt == ""
            ? productos.map((produ) => <ProductoCard producto={produ} /> ) 
            : filtrados.map((produ) => <ProductoCard producto={produ} />)}
        </ul>
        
      </div>
    </>
  );
}

// function Lista() {
//   let productoJSK = ;
//   return productoJSK;
// }

// function Li({producto}){
// return (
//   <li key ={producto.id}>{producto.title}</li>
// );
// }
