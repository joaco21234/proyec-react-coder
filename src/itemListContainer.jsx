import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Cards from "./componentes/cards/Cards";
import ItemList from "./componentes/itemlist/ItemList";
import productos from "./data/productos";
import styles from "./componentes/itemliscontainer/ItemListContainer.module.css";

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
