import { useState } from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import CartOffcanvas from '../CartOffcanvas.jsx/CartOffcanvas.jsx';
import styles from './NavBar.module.css';

function NavBar() {
    const [showCart, setShowCart] = useState(false);

    const handleShow = () => setShowCart(true);
    const handleClose = () => setShowCart(false);

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/img/titulo-igold1.png" alt="Logo" />
            </div>
            <div className={styles.containerLinks}>
            <Link className={styles.linkk} to='/'>Inicio</Link>
            <Link className={styles.linkk} to='/iphones'>iPhones</Link>
            <Link className={styles.linkk} to='/ipads'>iPads</Link>
            <Link className={styles.linkk} to='/accesorios'>Accesorios</Link>
            <Link className={styles.linkk} to='/contacto'>Contacto</Link>
            </div>

            <div style={{ flex: 0.4, display: 'flex' }}>
            <CartWidget handleShow={handleShow} />
            </div>
        </nav>

        <CartOffcanvas show={showCart} handleClose={handleClose} />
        </>
    );
    }

export default NavBar;

