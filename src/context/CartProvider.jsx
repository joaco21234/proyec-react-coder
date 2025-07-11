import { useState } from 'react';
import {CartContext} from './CartContext';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

function eliminarDelCarrito(id) {
    setCart(cart.filter((item) => item.id !== id));
}

function vaciarCarrito() {
    setCart([]);
}


function agregarAlCarrito(producto) {
    const productoExistente = cart.find((item) => item.id === producto.id);

    if (productoExistente) {
        const carritoActualizado = cart.map((item) =>
        item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        setCart(carritoActualizado);
    } else {
        setCart([...cart, { ...producto, cantidad: 1 }]);
    }
}


    return (
        <CartContext.Provider value={{ cart, setCart, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, calcularTotal: () => cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0) }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
