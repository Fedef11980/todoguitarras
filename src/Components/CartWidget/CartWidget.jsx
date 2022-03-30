import React from "react";
import { FaShoppingCart } from "react-icons/fa";


export const CartWidget = () => {
  return (
    <div>
      <button type="button" className="btn btn-light">
        Carrito <span className="badge bg-secondary">4</span>
      </button>
      {/* <FaShoppingCart /> */}
    </div>
  );
};
