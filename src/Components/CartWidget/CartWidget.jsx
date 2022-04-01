import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  const carritoContext = useContext(CartContext);
  console.log(carritoContext);

  return (
    <div>
      {
        <button type="button" className="btn btn-warning ">
          <FaShoppingCart />
          <span className="badge bg-secondary m-2">
            {carritoContext.contadorCarritoNavBar()}
          </span>
        </button>
      }
    </div>
  );
};
