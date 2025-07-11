import styles from './CartWidget.module.css';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget({ handleShow }) {
    const { cart } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <Button
                className={styles.cartButton}
                role="img"
                aria-label="carrito"
                onClick={handleShow}
            >
            🛒 {cart.length > 0 ? cart.length : 0}
            </Button>
        </div>
    );
}

export default CartWidget;



