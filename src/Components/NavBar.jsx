import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg justify-content-around navbar-light text-white bg-dark">
        <div className="d-flex justify-content-around p-3">
          <ul className="navbar-nav">
            <li>
              <Link className="text-white" to="/">
                <button className="btn text-white"> Todo Guitarra</button>
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/categoryid"
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
                  <Link className="dropdown-item" to="/productos/electricas">
                    Electricas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/acusticas">
                    Acusticas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/electroAc">
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
                  <Link className="dropdown-item" to="/productos/ampsV">
                    Valvulares
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/ampsT">
                    Transistores
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/ampsA">
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
                  <Link className="dropdown-item" to="/productos/pedal">
                    Pedales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/pedaleras">
                    Multiefectos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/productos/racks">
                    Racks
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Nosotros" className="text-white">
                <button className="btn text-white">Nosotros </button>
              </Link>
            </li>
            <li>
              <Link to="/Contacto" className="text-white">
                <button className="btn text-white"> Contacto</button>
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <CartWidget />
              </Link>
            </li>
            <li>
              <Link to="firebase">
                <button className="btn">Firebase</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
