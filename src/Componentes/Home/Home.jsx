import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className='contenedorprincipal'>
           <div className='contenedorhome'>
                <h1>Bienvenido a la tienda Pokemon</h1>
                <p>Nos alegramos de tenerte aquí. Contamos con estos dos productos:</p>
                <h3>Productos: </h3>

                <div className="card">
                    
                    <div className="descripcion">
                        <h2>Pokebola</h2>
                        <p>Es una pokebola normal sin ningun item adicional, es una pokebola comun y corriente sin funcioalidad extra .</p>
                        
                    </div>
                    <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Pokéball.png" alt="Producto 1"  />
                </div>

                <p></p>
                <div className="card">
                    
                    <div className="descripcion">
                        <h2>Pokebola</h2>
                        <p>Es una pokebola normal sin ningun item adicional, es una pokebola comun y corriente sin funcioalidad extra .</p>
                        
                    </div>
                    <img className="image" src="https://c0.klipartz.com/pngpicture/774/573/gratis-png-pop-art-pokebola.png" alt="Producto 1"  />
                </div>

            </div>

           
            <div className='styleimg'>
                <div>
                 
                        <img src="https://www.pngkey.com/png/detail/1-18288_play-pokemon-logo-pokemon-league.png" alt="Pokemon" />
                   
                </div>
            </div>
        </section>
    );
}

export default Home;

