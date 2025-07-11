import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

function Checkout({ cart, total, onConfirm, onBack }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { nombre, email, telefono } = formData;

        if (!nombre || !email || !telefono) {
            Swal.fire({
                icon: 'error',
                title: 'Faltan datos',
                text: 'Por favor completá todos los campos antes de confirmar la compra.',
                background: '#000',
                color: '#fff'
            });
            return;
        }

        onConfirm(formData);
    };

    return (
        <div>
            <h5>Completa tus datos</h5>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@mail.com"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="123456789"
                    />
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={onBack}>
                        Volver al carrito
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Confirmar compra
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default Checkout;
