import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg justify-content-around navbar-light text-white bg-dark">
        <div className="d-flex justify-content-around p-3">
          <ul className="navbar-nav">
            <li>
              <Link className="text-white" to="/">
                <h2>Todo Guitarra</h2>
              </Link>
            </li>
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
            <li>
              <Link to="/Nosotros" className="text-white">
                <h4>Nosotros</h4>
              </Link>
            </li>
            <li>
              <Link to="/Contacto" className="text-white">
                <h4>Contacto</h4>
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <button type="button" className="btn btn-light">
                  Carrito <span className="badge bg-secondary">4</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="firebase">Firebase</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
