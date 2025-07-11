import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './context/CartProvider.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
