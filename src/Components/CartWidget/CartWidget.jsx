import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart />
      <button type="button" className="btn btn-light">
        Compras <span className="badge bg-secondary"></span>
      </button>
    </div>
  );
};
