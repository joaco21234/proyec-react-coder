
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductoPorId } from "../data/productos";
import ItemList from "./itemlist/ItemList";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductoPorId(id).then((res) => {
        setProducto(res);
        setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Cargando detalle...</p>;
    if (!producto) return <p>Producto no encontrado</p>;

    return (
        <ItemList productos={[producto]} loading={loading} />
    );
}

export default ItemDetailContainer;
