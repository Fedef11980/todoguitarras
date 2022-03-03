import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Inicio</span>
            <span className="navbar-brand mb-0 h1">Guitarras Electricas</span>
            <span className="navbar-brand mb-0 h1">Guitarrsa Acusticas</span>
            <CartWidget />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
