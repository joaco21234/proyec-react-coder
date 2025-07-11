import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./componentes/itemlist/ItemList";
import { getProducts } from "./firebase/db";

function ItemListContainer({ bienvenida }) {
  const { categoria } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((productos) => {
        const filtrados = categoria
          ? productos.filter((prod) => prod.categoria === categoria)
          : productos;
        setProductosFiltrados(filtrados);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoria]);

  return (
    <ItemList productos={productosFiltrados} loading={loading} />
  );
}

export default ItemListContainer;
