
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './CartOffcanvas.module.css';
import Swal from 'sweetalert2';
import Checkout from '../checkot/checkout';

function CartOffcanvas({ show, handleClose }) {
    const { cart, eliminarDelCarrito, vaciarCarrito, aumentarCantidad, disminuirCantidad } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);

    const calcularTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    };

    const handleVaciarCarrito = () => {
        vaciarCarrito();
        setShowCheckout(false);
        Swal.fire({
            icon: 'warning',
            title: 'Carrito vacío',
            timer: 1300,
            showConfirmButton: false,
            background: '#1b1b1b',
            color: '#e6dddd',
        });
    };

    const handleConfirmarCompra = (formData) => {
        const resumenProductos = cart
            .map((p) => `🛒 ${p.nombre} x ${p.cantidad} = $${p.precio * p.cantidad}`)
            .join('\n');

        Swal.fire({
            title: 'Compra realizada con éxito',
            html: `
                <div class="swal-checkout-content">
                    <p><strong>Nombre:</strong> ${formData.nombre}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Teléfono:</strong> ${formData.telefono}</p>
                    <hr />
                    <pre style='color: white;'>${resumenProductos}</pre>
                    <p><strong>Total:</strong> $${calcularTotal()}</p>
                </div>
            `,
            icon: 'success',
            confirmButtonText: 'Cerrar',
            customClass: {
                popup: 'swal-checkout-popup',
                confirmButton: 'swal-confirm-button'
            },
            background: '#1b1b1b',
            color: '#e6dddd',
        }).then(() => {
            vaciarCarrito();
            setShowCheckout(false);
            handleClose();
        });
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header className={styles.Header} closeButton>
                <Offcanvas.Title className={styles.Title}>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.Offcanvas}>
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : showCheckout ? (
                    <Checkout
                        cart={cart}
                        total={calcularTotal()}
                        onConfirm={handleConfirmarCompra}
                        onBack={() => setShowCheckout(false)}
                    />
                ) : (
                    <>
                        <ul className="list-group mb-3">
                            {cart.map((producto, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item d-flex justify-content-between align-items-center ${styles.productoItem}`}
                                >
                                    <div className="d-flex align-items-center">
                                        {producto.imagen && (
                                            <img
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                width="50"
                                                className="me-3 rounded"
                                            />
                                        )}
                                        <div>
                                            <strong>{producto.nombre}</strong>
                                            <br />
                                            <small>Precio unitario: ${producto.precio}</small>
                                            <br />
                                            <div className="d-flex align-items-center gap-2 mt-2">
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => disminuirCantidad(producto.id)}
                                                    disabled={producto.cantidad <= 1}
                                                >
                                                    ➖
                                                </Button>
                                                <span>{producto.cantidad}</span>
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => aumentarCantidad(producto.id)}
                                                    disabled={producto.cantidad >= 5}
                                                >
                                                    ➕
                                                </Button>
                                            </div>
                                            <br />
                                            <small>Subtotal: ${producto.precio * producto.cantidad}</small>
                                        </div>
                                    </div>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => eliminarDelCarrito(producto.id)}
                                    >
                                        🗑️
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        <div className="border-top pt-3 mt-3">
                            <h5 className="text-end">
                                Total: <span className="fw-bold text-success">${calcularTotal()}</span>
                            </h5>
                            <div className="d-flex justify-content-between mt-3">
                                <Button variant="secondary" onClick={handleVaciarCarrito}>
                                    Vaciar carrito
                                </Button>
                                <Button variant="success" onClick={() => setShowCheckout(true)}>
                                    Finalizar compra
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default CartOffcanvas;


