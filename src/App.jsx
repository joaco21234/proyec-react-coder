import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './itemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda!" />} />
        <Route path="/iphones" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de iPhones!" />} />
        <Route path="/ipads" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de iPads!" />} />
        <Route path="/accesorios" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda de Accesorios!" />} />
        <Route path="/contacto" element={<ItemListContainer bienvenida="¡Bienvenido a la sección de Contacto!" />} />
        <Route path="*" element={<ItemListContainer bienvenida="¡Página no encontrada!" />} />
      </Routes>
      <>
      </>
    </BrowserRouter>
  )
}

export default App