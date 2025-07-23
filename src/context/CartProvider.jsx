import { useState } from 'react';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function eliminarDelCarrito(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    function vaciarCarrito() {
        setCart([]);
    }

    function mostrarAlertaMaximo(producto) {
        Swal.fire({
            icon: 'error',
            title: 'Máximo alcanzado',
            text: `Solo podés agregar hasta 5 unidades de "${producto.nombre}".`,
            background: '#000',
            color: '#fff',
            confirmButtonColor: '#ff9800',
        });
    }

function agregarAlCarrito(producto, cantidad = 1) {
    const productoExistente = cart.find((item) => item.id === producto.id);

    if (productoExistente) {
        const nuevaCantidad = productoExistente.cantidad + cantidad;

        if (nuevaCantidad > 5) {
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

        const carritoActualizado = cart.map((item) =>
            item.id === producto.id
                ? { ...item, cantidad: nuevaCantidad }
                : item
        );
        setCart(carritoActualizado);
    } else {
        if (cantidad > 5) cantidad = 5;
        setCart([...cart, { ...producto, cantidad }]);
    }

    return true;
}


    function aumentarCantidad(id) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.cantidad < 5
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    }

    function disminuirCantidad(id) {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        );
    }

    function calcularTotal() {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                agregarAlCarrito,
                eliminarDelCarrito,
                vaciarCarrito,
                aumentarCantidad,
                disminuirCantidad,
                calcularTotal,
                mostrarAlertaMaximo
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;


