import styles from './ItemList.module.css';

function ItemList({ productos }) {
    return (
        <div className={styles.containerCards}>
        {productos.map((producto) => (
            <div className={styles.card} key={producto.id}>
            <img
                src={producto.imagen}
                className={styles.cardImg}
                alt={producto.nombre}
            />
            <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{producto.nombre}</h5>
                <p className={styles.cardText}>Precio: ${producto.precio}</p>
                <button className={styles.cardButton}>Agregar al carrito</button>
                <button className={styles.cardButton}>Info</button>
                </div>
            </div>
        ))}
        </div>
    );
}

export default ItemList;