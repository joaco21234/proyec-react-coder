import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './itemListContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda!" />} />
        <Route path="/:categoria" element={<ItemListContainer bienvenida="¡Bienvenido a la tienda!" />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App