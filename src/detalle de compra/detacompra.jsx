

import React, { useState } from 'react';
import './detacompra.css';
import Compra from '../Componentes/formCompra/Compra';

const Detalle = () => {
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const agregarAlCarrito = (nombreProducto, precioProducto) => {
        const producto = { nombre: nombreProducto, precio: precioProducto };
        setProductosSeleccionados([...productosSeleccionados, producto]);
    };

    return (
        <section className='contenedorprincipal'>
            <div className='contenedorhome'>
                <h1>Detalles Productos - Carrito</h1>
                <p>Estos son algunos detalles de los productos:</p>
                <h3>Detalles: </h3>

                <div className="card">
                    <div className="descripcion">
                        <h2>Pokebola - Precio Q250</h2>
                        <p>Es un artilugio u objeto diseñado para servir dos funciones básicas en el mundo Pokémon, almacenar y transportar Pokémon, haciendo posible la captura de Pokémon.</p>
                        <button onClick={() => agregarAlCarrito('Pokebola', 250)}>Comprar</button>
                    </div>
                </div>

                <div className="card">
                    <div className="descripcion">
                        <h2>Pikachu - Precio Q450</h2>
                        <p>Es un peluche con forma de pikachu siendo el primer pokemon de ash.</p>
                        <button onClick={() => agregarAlCarrito('Pikachu', 450)}>Comprar</button>
                    </div>
                </div>
            </div>

            <Compra productos={productosSeleccionados} /> {/* Aquí se pasa correctamente los productos seleccionados */}
            
          
        </section>
    );
}

export default Detalle;
