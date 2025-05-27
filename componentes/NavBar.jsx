import CartWidget from './cartwidget'
function NavBar() {
return (
<nav style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#000',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    zIndex: 1000
}}>
    <div style={{ flex: 1 }}>
    <h1 style={{ margin: 0 }}>Igold</h1>
    </div>

    <div style={{ flex: 3, display: 'flex', textAlign:'center', gap: '4rem' }}>
    <button>Inicio</button>
    <button>iPhones</button>
    <button>iPads</button>
    <button>Accesorios</button>
    <button>Contacto</button>
    </div>

    <div style={{ flex: 0.4, display: 'flex', }}>
    <CartWidget />
    </div>
</nav>
)
}

export default NavBar


