function CartWidget() {
return (
<div style={{ position: 'relative', fontSize: '2rem', padding: '0 1rem' }}>
    <span role="img" aria-label="carrito">🛒</span>
    <span style={{
    position: 'absolute',
    top: '-10px',
    right: '0px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '0.8rem'
    }}>
    3
    </span>
</div>
);
}

export default CartWidget;



