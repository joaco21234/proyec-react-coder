
# 🛍️ Igol - Ecommerce de tecnología

**Igol** es un ecommerce de productos tecnológicos, desarrollado como proyecto final para un curso de programación web. Permite explorar productos, agregarlos al carrito y completar la compra mediante un formulario. El frontend está hecho en React y se conecta a Firebase para el manejo de productos y órdenes.

---

## 🚀 Tecnologías utilizadas

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [React-Bootstrap](https://react-bootstrap.github.io/)
- 🔥 [Firebase (Firestore)](https://firebase.google.com/)
- 💬 [SweetAlert2](https://sweetalert2.github.io/)

---

## 📦 Dependencias principales
- `react`
- `react-dom`
- `react-bootstrap`
- `bootstrap`
- `firebase`
- `sweetalert2`
- `react-router-dom`
- `vite`

---

## 📁 Estructura del Proyecto

```bash
├── node_modules/
├── public/
│   ├── img/
│   └── error.js
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── componentes/
│   │   ├── CartOffcanvas.jsx
│   │   ├── CartWidget.jsx
│   │   ├── checkout/
│   │   ├── itemlist/
│   │   ├── NavBar.jsx
│   │   └── ItemDetailContainer.jsx
│   ├── contacto/
│   │   ├── contacto.js
│   │   └── form.html
│   ├── context/
│   │   ├── CartContext.js
│   │   └── CartProvider.jsx
│   ├── data/
│   │   └── productos.jsx
│   ├── firebase/
│   │   ├── config.js
│   │   └── db.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── itemListContainer.jsx
│   ├── main.jsx
├── .gitignore
├── CLAUDE.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


---

## 🛠️ Funcionalidades principales

- Listado de productos obtenidos desde Firebase.
- Filtro por categoría usando React Router.
- Agregar productos al carrito.
- Eliminar productos del carrito individualmente o vaciarlo por completo.
- Carrito accesible mediante botón tipo "offcanvas".
- Checkout con validación de formulario.
- Creación de orden de compra en Firestore.
- Confirmación de compra con número de orden.

---

## 🌐 Demo en producción

📦 ¡Podés probar la app en vivo en Vercel!  
👉 [proyec-react-coder.vercel.app](proyec-react-coder.vercel.app)  

---

## ⚙️ Instalación local

Si querés probar el proyecto en tu máquina:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/igol.git

# Entrar a la carpeta del proyecto
cd igol

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev

