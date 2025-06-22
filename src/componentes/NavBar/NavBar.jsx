import CartWidget from '../CartWidget/CartWidget';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import styles from './NavBar.module.css'
function NavBar() {
return (
<nav className={styles.navbar}>
    <div className={styles.logo}>
    <h1>Igold</h1>
    </div>

    <div className={styles.containerLinks}>
        <Link className={styles.linkk} to='/'>Inicio</Link>
        <Link className={styles.linkk} to="/iphones">iPhones</Link>
        <Link className={styles.linkk} to="/ipads">iPads</Link>
        <Link className={styles.linkk} to="/accesorios">Accesorios</Link>
        <Link className={styles.linkk} to="/contacto">Contacto</Link>
    </div>

    <div style={{ flex: 0.4, display: 'flex', }}>
    <CartWidget />
    </div>
</nav>
)
}

export default NavBar


