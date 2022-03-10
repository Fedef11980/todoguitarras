import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <div className="text-white">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href={}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Guitarras
              </a>
            </li>
          </ul>
        </div>
        >
        <CartWidget />
        <ul />
      </div>
    </div>
  );
};

export default NavBar;
