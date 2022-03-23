import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark">
      <Link className="justify-content-center px-5"to="/"><h2>Todo Guitarra</h2></Link>
        <div className="d-flex justify-content-between">          
          <ul className="navbar-nav">
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-white" to="/guitars"               
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" 
                >Guitarras</Link>
              <ul
                className="dropdown-menu"  
                aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/guitars/electricas">Electricas</Link>
                </li>
                <li>
                  <Link className="dropdown-item"to="/guitars/electroAcusticas">Acusticas</Link>
                </li>         
                <li>
                  <Link className="dropdown-item" to="/guitars/acusticas">Electroacusticas</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Amplificadores
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item">Valvulares</a>
                </li>
                <li>
                  <a className="dropdown-item">Transistores</a>
                </li>
                <li>
                  <a className="dropdown-item">Amp. Acusticos</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >Multiefectos
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <li>                 
                  <a className="dropdown-item">Pedales</a>
                </li>
                <li>                 
                  <a className="dropdown-item">Multiefectos</a>
                </li>
                <li>                  
                  <a className="dropdown-item">Racks</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/Nosotros" className="text-white"><h4>Nosotros</h4></Link>
        <Link to="/Contacto" className="text-white"><h4>Contacto</h4></Link>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
