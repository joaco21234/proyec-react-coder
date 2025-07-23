import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ producto }) {
    return (
        <div className={styles.container}>
            <img
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.image}
            />
            <h2 className={styles.title}>{producto.nombre}</h2>
            <p className={styles.description}>{producto.descripcion}</p>
            <p className={styles.price}><strong>Precio:</strong> ${producto.precio}</p>

            <div className={styles.buttonContainer}>
                <ItemCount producto={producto} />
            </div>
        </div>
    );
}

export default ItemDetail;


