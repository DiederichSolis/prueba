import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import Footer from './Componentes/Footer/Footer';
import Home from './Componentes/Home/Home';
import PokemonList from './Componentes/Pokemones/Pokemones';
import Detalle from './detalle de compra/detacompra';


function App() {
  return (
    <>
    <Navbar />

    <div className="containerH">
        <section id="home">
          <Home />
        </section>
        <section id="detalles">
          <Detalle />
        </section>

        <section id="pokemon">
          <PokemonList />
        </section>
       


      </div>
    
    

    <Footer />
   
  </>
  );
}

export default App;




