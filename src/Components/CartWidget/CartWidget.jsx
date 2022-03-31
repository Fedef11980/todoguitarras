import React from "react";
import { CartContext } from "../../Context/CartContext";
import {useContext} from "react"



export const CartWidget = () => {
  const carritoContext = useContext(CartContext);
  console.log (carritoContext)


  return (
    <div>
      <button type="button" className="btn btn-warning">
        Ver Carrito <span className="badge bg-secondary"></span>
      </button>
    </div>
  );
};
