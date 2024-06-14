import React from 'react';
import './detacompra.css';

const Detalle = () => {
    return (
        <section className='contenedorprincipal'>
           <div className='contenedorhome'>
                <h1>Detalles Productos</h1>
                <p>Estos son algunso detalle de los producto:</p>
                <h3>Detalles: </h3>

                <div className="card">
                    
                    <div className="descripcion">
                        <h2>Pokebola - Precio Q250</h2>
                        <p>Es un artilugio u objeto diseñado para servir dos funciones básicas en el mundo Pokémon, almacenar y transportar Pokémon, haciendo posible la captura de Pokémon. .</p>
                        
                    </div>
                    
                </div>

                <p></p>
                <div className="card">
                    
                    <div className="descripcion">
                        <h2>Pikachu - Precio Q450</h2>
                        <p>Es un peluche con forma de pikachu siendo el primer pokemon de ash .</p>
                        
                    </div>
                </div>

            </div>

           
            <div className='styleimg'>
                <div>
                 
                        <img src="https://home.pokemon.com/assets/img/screens/en/p08_03.jpg" alt="Pokemon" />
                   
                </div>
            </div>
        </section>
    );
}

export default Detalle;

