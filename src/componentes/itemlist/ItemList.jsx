import styles from './ItemList.module.css';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemList({ productos }) {
    const { agregarAlCarrito, cart } = useContext(CartContext);

    const handleInfo = (producto) => {
        let cantidadSeleccionada = 1;

        Swal.fire({
            title: `<span style="color: white; font-size: 24px; font-weight: bold;">${producto.nombre}</span>`,
            html: `
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width:80%;border-radius:8px;margin-bottom:12px;" />
                <p style="color: white; font-size: 18px;">${producto.descripcion}</p>
                <p style="color: #4caf50; font-weight: bold; margin-top: 8px;">Precio: $${producto.precio}</p>
                <div style="margin-top: 16px;">
                    <p style="color: white;">Cantidad: </p>
                    <button id="decrement" style="margin-right: 8px;">-</button>
                    <input id="cantidadInput" type="number" value="1" min="1" style="width: 40px; text-align: center;" readonly />
                    <button id="increment" style="margin-left: 8px;">+</button>
                </div>
            `,
            confirmButtonText: 'Agregar al carrito',
            width: 350,
            background: '#000000',
            color: '#fff',
            preConfirm: () => {
                const enCarrito = cart.find(item => item.id === producto.id)?.cantidad || 0;
                const total = enCarrito + cantidadSeleccionada;

                if (total > 5) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Máximo alcanzado',
                        text: `Solo podés agregar hasta 5 unidades de "${producto.nombre}".`,
                        background: '#000',
                        color: '#fff',
                        confirmButtonColor: '#ff9800',
                    });
                    return false;
                }

                const agregado = agregarAlCarrito(producto, cantidadSeleccionada);

                if (agregado) {
                    Swal.fire({
                        toast: true,
                        position: 'center',
                        icon: 'success',
                        title: `${producto.nombre.toUpperCase()} AGREGADO AL CARRITO`,
                        showConfirmButton: false,
                        timer: 1600,
                        background: '#ff9800',
                        color: '#fff',
                    });
                }
            },
            didOpen: () => {
                const input = document.getElementById('cantidadInput');
                const incrementBtn = document.getElementById('increment');
                const decrementBtn = document.getElementById('decrement');

                incrementBtn.addEventListener('click', () => {
                    if (cantidadSeleccionada < 5) {
                        cantidadSeleccionada++;
                        input.value = cantidadSeleccionada;
                    }
                });

                decrementBtn.addEventListener('click', () => {
                    if (cantidadSeleccionada > 1) {
                        cantidadSeleccionada--;
                        input.value = cantidadSeleccionada;
                    }
                });
            }
        });
    };

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
                                const agregado = agregarAlCarrito(producto, 1);
                                if (agregado) {
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
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Máximo alcanzado',
                                        text: `Solo podés agregar hasta 5 unidades de "${producto.nombre}".`,
                                        background: '#000',
                                        color: '#fff',
                                        confirmButtonColor: '#ff9800',
                                    });
                                }
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

                        <Link to={`/detalle/${producto.id}`}>
                            <button className={styles.cardButton}>Ver más</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;


