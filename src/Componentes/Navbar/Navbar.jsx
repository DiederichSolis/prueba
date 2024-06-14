import React, { useState } from "react";
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
              <Link to="HOME" className="catalogo">Home</Link>
            </li>
            <li>
              <Link to="detalle"  className="catalogo">Detalle de Compra</Link>
            </li>
            <li>
              <Link to="detalle"  className="catalogo">Formulario de Compra</Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
