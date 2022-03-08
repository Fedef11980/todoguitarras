import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="text-white">
        <nav className="navbar navbar-light bg-dark text-align-center">
          <div className="container-fluid">
            <span className="navbar-brand text-white mb-0 h1">Inicio</span>
            <span className="navbar-brand text-white mb-0 h1">
              Guitarras Electricas
            </span>
            <span className="navbar-brand text-white mb-0 h1">
              Guitarrsa Acusticas
            </span>
            <CartWidget /> 
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
