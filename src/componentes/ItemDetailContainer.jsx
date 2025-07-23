import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../firebase/db"; 
import ItemDetail from "./ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then((res) => setProducto(res))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p style={{ padding: "1rem" }}>Cargando detalle...</p>;
    if (!producto) return <p style={{ padding: "1rem" }}>Producto no encontrado</p>;

    return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;

