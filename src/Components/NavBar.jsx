import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark">
        <Link className="justify-content-center px-3" to="/">
          <h2>Todo Guitarra</h2>
        </Link>
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/instruments"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Guitarras
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/instruments/electricas">
                    Electricas
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/instruments/electroAcusticas"
                  >
                    Acusticas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instruments/acusticas">
                    Electroacusticas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/instruments/amps"
              >
                Amplificadores
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/instruments/ampsV">
                    Valvulares
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instruments/ampsT">
                    Transistores
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instruments/ampsA">
                    Amp. Acusticos
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/instruments/multiFX"
              >
                Multiefectos
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/instruments/multiP">
                    Pedales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instruments/multiM">
                    Multiefectos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/instruments/multiR">
                    Racks
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/Nosotros" className="text-white">
          <h4>Nosotros</h4>
        </Link>
        <Link to="/Contacto" className="text-white">
          <h4>Contacto</h4>
        </Link>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
