import React from 'react';
import './Compra.css';

const Compra = ({ productos }) => {
    return (
        <section className='contenedorprincipal'>
            <div className='contenedorhome'>
               
                <h3>Productos: </h3>
                <ul>
                    {Array.isArray(productos) && productos.length > 0 ? (
                        productos.map((producto, index) => (
                            <li key={index}>{producto.nombre} - Precio: Q{producto.precio}</li>
                        ))
                    ) : (
                        <li>No hay productos seleccionados</li>
                    )}
                </ul>
            </div>

            <div className='styleimg'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfmd-ToY3N3sWcteuzoN3hnl8Lf9O8KRwMQ&s" alt="Pokemon" />
                </div>
            </div>
        </section>
    );
}

export default Compra;
