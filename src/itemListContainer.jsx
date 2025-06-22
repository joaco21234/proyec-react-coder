import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./componentes/itemlist/ItemList";
import productos from "./data/productos";

function ItemListContainer({ bienvenida }) {
    const { categoria } = useParams();

    const productosFiltrados = categoria
        ? productos.filter((prod) => prod.categoria === categoria)
        : productos;

    return (
        <div>
        <h2>{bienvenida}</h2>
        <ItemList productos={productosFiltrados} />
        </div>
    );
}

export default ItemListContainer;
