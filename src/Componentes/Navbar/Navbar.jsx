import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {


  return (
    <>
      <nav className='syle1'>
        <div className='content'>
          <img className='logo' src='https://static.vecteezy.com/system/resources/previews/027/127/571/non_2x/pokemon-logo-pokemon-icon-transparent-free-png.png' alt="" style={{ width: '8%', height: '5%' }} />
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}  className="catalogo">Home</Link>
            </li>
            <li>
              <Link to="detalles" smooth={true} duration={500} className="catalogo">Detalle de Producto</Link>
            </li>
            <li>
              <Link to="detalles" smooth={true} duration={500}  className="catalogo">Formulario de Compra</Link>
            </li>
            <li>
              <Link to="pokemon"   smooth={true} duration={500}className="catalogo">Pokemones</Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
