import styles from './CartWidget.module.css';
function CartWidget() {
return (
<div className={styles.container}>
    <button className={styles.cartButton} role="img" aria-label="carrito">🛒</button>
    <span className={styles.noti}>
    3
    </span>
</div>
);
}

export default CartWidget;



