import { useEffect, useState } from "react";
import Cards from "./componentes/cards/Cards";
import { productos } from "./data/productos";
import styles from "./componentes/cards/Cards.module.css";

function ItemListContainer({ bienvenida }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Simular carga asincrónica
        const cargarProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(productos);
            }, 1000); // Simulamos 1 segundo de espera
        });
        };

        cargarProductos().then((data) => setItems(data));
    }, []);

    return (
        <section className={styles.secIphones}>
        <h2>{bienvenida}</h2>
        {items.map((producto) => (
            <Cards key={producto.id} producto={producto} />
        ))}
        </section>
    );
    }

export default ItemListContainer;
