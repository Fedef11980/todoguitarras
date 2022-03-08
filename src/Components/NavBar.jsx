import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between align-item-center px5y ">
      <header>
        <nav className="navbar navbar-light bg-light text-align-center">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Inicio</span>
            <span className="navbar-brand mb-0 h1">Guitarras Electricas</span>
            <span className="navbar-brand mb-0 h1">Guitarrsa Acusticas</span>
          </div>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};

export default NavBar;
