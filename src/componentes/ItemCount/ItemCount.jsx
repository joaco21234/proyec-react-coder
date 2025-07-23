import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import styles from "./ItemCount.module.css";

function ItemCount({ producto }) {
    const { agregarAlCarrito, cart } = useContext(CartContext);
    const enCarrito = cart.find((item) => item.id === producto.id)?.cantidad || 0;

    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
        if (enCarrito + cantidad > 5) {
            Swal.fire({
                icon: "error",
                title: "Máximo alcanzado",
                text: `Solo podés agregar hasta 5 unidades de "${producto.nombre}".`,
                background: "#000",
                color: "#fff",
                confirmButtonColor: "#ff9800",
            });
            return;
        }

        const agregado = agregarAlCarrito(producto, cantidad);

        if (agregado) {
            Swal.fire({
                toast: true,
                position: "center",
                icon: "success",
                title: `${producto.nombre.toUpperCase()} AGREGADO AL CARRITO`,
                showConfirmButton: false,
                timer: 1600,
                background: "#ff9800",
                color: "#fff",
            });
        }
    };

    return (
        <div className={styles.container}>
            <p>Cantidad:</p>
            <div className={styles.cantidadRow}>
                <button className={styles.decrementBtn}
                    onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                >
                    ➖
                </button>
                <span>{cantidad}</span>
                <button className={styles.incrementBtn}
                    onClick={() => cantidad < 5 && enCarrito + cantidad < 5 && setCantidad(cantidad + 1)}
                >
                    ➕
                </button>
            </div>
            <button onClick={handleAgregar} className={styles.agregarBtn}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;
