import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Guitarras{" "}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Electricas{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Acusticas{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Electroacusticas{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Amplificadores{" "}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Valvulares
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Transistores{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Amp. Acusticos{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Multiefectos{" "}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Pedales{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Multiefectos{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="#">
                    {" "}
                    Racks{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
