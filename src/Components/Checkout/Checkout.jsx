import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Cart } from "../Cart/Cart"; 

export const Checkout = () => {
 /*  const { newOrder } = useContext(CartContext);
  
  newOrder.map(datos) =>{

    <cart 
    key={datos?.docReference.nombre}

  }
 */

  return (
    <div className="container my-5">
      <h2>Gracias por tu compra!</h2>
      <hr />
      <h3>Tu número de orden es: {}</h3>
      <Link to="/" className="btn btn-primary">
        Volver
      </Link>
    </div>
  );
};
