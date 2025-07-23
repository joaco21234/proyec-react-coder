
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{
            textAlign: 'center',
            marginTop: '100px',
            color: '#fff',
            backgroundColor: '#000',
            padding: '40px',
            borderRadius: '12px'
        }}>
            <h1>Error 404</h1>
            <p>La página que estás buscando no existe.</p>
            <Link to="/" style={{ color: '#ff9800', textDecoration: 'underline' }}>
                Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;
