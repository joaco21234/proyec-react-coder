
const productos = [ 
    {
    id: 1,
    nombre: "iPhone XS",
    descripcion: "Pantalla Super Retina OLED de 5.8, Face ID, chip A12 Bionic, y cámara dual con modo retrato. Diseño elegante en acero inoxidable y vidrio.",
    precio: 310,
    imagen: "/img/iphone1.png",
    categoria: "iphones",
},
    {
        id: 2,
        nombre: "iPhone 8",
        descripcion: "Pantalla Retina HD de 4.7, chip A11 Bionic, diseño clásico con botón Home y Touch ID. Ideal para quienes buscan rendimiento en tamaño compacto.",
        precio: 250,
        imagen: "/img/iphone2.png",
        categoria: "iphones",
},
    {
        id: 3,
        nombre: "iPhone 15",
        descripcion: "Innovación accesible. Pantalla OLED de 6.1 con Dynamic Island, cámara principal de 48 MP, chip A16 Bionic y puerto USB-C. Ligero, potente y con el nuevo diseño en aluminio reciclado. Perfecto para el día a día con estilo.",
        precio: 2400,
        imagen: "/img/iphone3.png",
        categoria: "iphones",
},
    {
        id: 4,
        nombre: "iPhone 8 plus",
        descripcion: "Elegancia clásica con potencia sólida. Pantalla Retina HD de 5.5, chip A11 Bionic. Diseño de vidrio con carga inalámbrica. Ideal para quienes quieren rendimiento y botón Home con Touch ID.",
        precio: 290,
        imagen: "/img/iphone4.png",
        categoria: "iphones",
},
    {
        id: 5,
        nombre: "iPhone 14 plus",
        descripcion: "Igual que el iPhone 14, pero con pantalla más grande de 6.7 y batería de larga duración. Perfecto para ver contenido y jugar.",
        precio: 1400,
        imagen: "/img/iphone5.png",
        categoria: "iphones",
},
    {
        id: 6,
        nombre: "iPhone 14 pro",
        descripcion: "Pantalla OLED de 6.1, chip A15 Bionic, gran mejora en cámara con modo Acción y Photonic Engine. Diseño resistente y moderno.",
        precio: 1400,
        imagen: "/img/iphone6.png",
        categoria: "iphones",
},
    {
        id: 7,
        nombre: "iPhone 11",
        descripcion: "Pantalla Liquid Retina de 6.1, chip A13 Bionic y cámara dual con ultra gran angular. Uno de los modelos más populares por su equilibrio calidad-precio.",
        precio: 500,
        imagen: "/img/iphone7.png",
        categoria: "iphones",
},
    {
        id: 8,
        nombre: "iPhone 12 pro",
        descripcion: "Diseño de bordes planos, pantalla OLED de 6.1, chip A14 Bionic y cámaras avanzadas con LiDAR para retratos nocturnos. 5G incluido.",
        precio: 750,
        imagen: "/img/iphone8.png",
        categoria: "iphones",
},
    {
        id: 9,
        nombre: "iPhone 11 pro",
        descripcion: "Pantalla OLED de 5.8, triple cámara profesional, acabado premium en vidrio mate y chip A13 Bionic. Potente y elegante.",
        precio: 600,
        imagen: "/img/iphone9.png",
        categoria: "iphones",
},
    {
        id: 10,
        nombre: "iPhone 13 pro",
        descripcion: "Mejora todo: chip A15 Bionic, pantalla ProMotion a 120 Hz, mejor autonomía y cámaras top con modo Cinemático. Para usuarios exigentes.",
        precio: 1500,
        imagen: "/img/iphone10.png",
        categoria: "iphones",
},
    {
        id: 11,
        nombre: "Airpods pro (1gen)",
        descripcion: "Cancelación activa de ruido ANCModo Transparencia para escuchar el entornoAjuste personalizado con puntas de siliconaChip H1 para conexión rápida y eficienteResistencia al sudor y agua (IPX4)Audio espacial con seguimiento dinámico de cabeza",
        precio: 120,
        imagen: "/img/airpods-1-geb.png",
        categoria: "accesorios",
},
    {
        id: 12,
        nombre: "Airpods pro (2gen)",
        descripcion: "Mejor cancelación de ruido, chip H2, modo transparencia adaptativo y mayor batería. Estuche con altavoz, carga MagSafe y controles táctiles personalizados.",
        precio: 199,
        imagen: "/img/airpod-2-gen.png",
        categoria: "accesorios"
},
    {
        id: 13,
        nombre: "Airpods 3",
        descripcion: " Diseño sin puntas de silicona, audio espacial, resistencia IPX4 y hasta 6 horas de batería. Estuche compatible con carga MagSafe y chip H1.",
        precio: 215,
        imagen: "/img/airpods-3.png",
        categoria: "accesorios"
},
    {
        id: 14,
        nombre: "Airpods 4",
        descripcion: "Pantalla OLED de 6.1, Dynamic Island, chip A17 Pro y cámaras avanzadas. Diseño premium en titanio.",
        precio: 380,
        imagen: "/img/airpods-4.png",
        categoria: "accesorios"
},
    {
        id: 15,
        nombre: "Cargador iphone (tradicional)",
        descripcion: "Adaptador USB-A estándar con potencia variable (5W o 12W) y carga por cable Lightning.",
        precio: 55,
        imagen: "/img/cargador-iphone.png",
        categoria: "accesorios"
},
    {
        id: 16,
        nombre: "Cargador iphone c",
        descripcion: "Adaptador USB-C que permite carga rápida con Power Delivery, compatible con cables Lightning a USB-C para iPhones recientes.",
        precio: 70,
        imagen: "/img/cargador-iphone-c-lightning.png",
        categoria: "accesorios"
},
    {
        id: 17,
        nombre: "Cargador iphone c-c",
        descripcion: "Cable USB-C a USB-C, no común para iPhones, más usado en iPads Pro o dispositivos USB-C.",
        precio: 80,
        imagen: "/img/cargador-c-c.png",
        categoria: "accesorios"
},
    {
        id: 18,
        nombre: "Cargador magsafe",
        descripcion: "Carga inalámbrica magnética para iPhone 12 en adelante con hasta 15W, alinea automáticamente y funciona con fundas MagSafe.",
        precio: 119,
        imagen: "/img/cargador-magsafe.png",
        categoria: "accesorios"
},
    {
        id: 19,
        nombre: "iPad 11 Pro",
        descripcion: "Pantalla Liquid Retina de 11 pulgadas, chip M1, cámara frontal de 12 MP con Center Stage, Face ID y compatibilidad con Apple Pencil (2ª generación). Ideal para productividad y creatividad.",
        precio: 999,
        imagen: "/img/ipad-11-pro.png",
        categoria: "ipads",
},
    {
        id: 20,
        nombre: "iPad Air 13",
        descripcion: "Pantalla Liquid Retina de 13 pulgadas, chip M1, cámara frontal de 12 MP con Center Stage, Face ID y compatibilidad con Apple Pencil (2ª generación). Ideal para productividad y creatividad.",
        precio: 999,
        imagen: "/img/ipad-air-13.png",
        categoria: "ipads",
},
    {
        id: 21,
        nombre: "iPad Air",
        descripcion: "Pantalla Liquid Retina de 10.9 pulgadas, chip M1, Touch ID en el botón de encendido, y compatibilidad con Apple Pencil (2ª generación) y Magic Keyboard. Ligero y potente.",
        precio: 599,
        imagen: "/img/ipad-air-10.9.png",
        categoria: "ipads",
},

];

export function getProductoPorId(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
        const producto = productos.find((prod) => prod.id === Number(id));
        resolve(producto);
        }, 500);
    });
}


export default productos;