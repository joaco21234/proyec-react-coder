import styles from './ItemList.module.css';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { useContext ,useState } from 'react';
import { CartContext } from '../../context/CartContext';

function ItemList({ productos }) {
    const handleInfo = (producto) => {
        Swal.fire({
        title: `<span style="color: white; font-size: 24px; font-weight: bold;">${producto.nombre}</span>`,
        html: `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:80%;border-radius:8px;margin-bottom:12px;" />
            <p style="color: white; font-size: 18px;">${producto.descripcion}</p>
            <p style="color: #4caf50; font-weight: bold; margin-top: 8px;">Precio: $${producto.precio}</p>
        `,
        confirmButtonText: 'Cerrar',
        width: 350,
        background: '#000000',
        });
    };

    const { agregarAlCarrito } = useContext(CartContext);

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
        <button
            className={styles.cardButton}
            onClick={() => {
            agregarAlCarrito(producto);

            Swal.fire({
                toast: true,
                position: 'center',
                icon: 'success',
                title: `${producto.nombre.toUpperCase()} AGREGADO AL CARRITO`,
                showConfirmButton: false,
                timer: 1600,
                background: '#ff9800',
                color: '#000',
                });
            }}
        >
            Agregar al carrito
        </button>

        <button
        className={styles.cardButton}
        onClick={() => handleInfo(producto)}
        >
        Info
        </button>
            </div>
            </div>
        ))}
    </div>
    );
}

export default ItemList;