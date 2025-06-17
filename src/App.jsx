import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './itemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda!" />} />
        <Route path="/:categoria" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de iPhones!" />} />
        <Route path="/:categoria" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de iPads!" />} />
        <Route path="/:categoria" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de Accesorios!" />} />
        <Route path="/:categoria" element={<ItemListContainer bienvenida="¡Bienvenido a la sección de Contacto!" />} />
        <Route path="*" element={<ItemListContainer bienvenida="¡Página no encontrada!" />} />
      </Routes>
      <>
      </>
    </BrowserRouter>
  )
}

export default App