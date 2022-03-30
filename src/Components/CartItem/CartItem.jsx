import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartItem = ({ imagen, nombre, cantidad, precio }) => {
  const carritoContext = useContext(CartContext);
  console.log ("carritoContext", carritoContext)

  return (
    <div clasName="container">
      <h1>Marca: {nombre}</h1>
      <img src={imagen} alt="instrumento" />
      <p>Cantidad: {cantidad}</p>
      <p>Precio {precio}</p>
    </div>
  );
};
