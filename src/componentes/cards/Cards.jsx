import style from './Cards.module.css';
const Cards = ({ producto }) => {
    return (
        <section className={style.secIphones}>
            <div className={style.container}>
                <img src={producto.imagen} className={style.img} alt={producto.nombre} />
                <div className={style.subContainer}>
                    <h5 className={style.title}>{producto.nombre}</h5>
                    <button className={style.agregarBtn} data-nombre={producto.nombre} data-precio={producto.precio}>Agregar al carrito</button>
                    <a href="#" className={style.infoBtn} data-id={producto.id}>Info</a>
                </div>
            </div>
        </section>
    );
};

export default Cards;
