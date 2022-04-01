import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
//import { GoTrashcan } from "react-icons/Go";

export const CartItem = ({ imagen, nombre, cantidad, precio, id }) => {
  const carritoContext = useContext(CartContext);
  console.log("CartItem=carritoContext", carritoContext);

  return (
    <div className="container">
      <h1>Marca: {nombre}</h1>
      <img src={imagen} alt="instrumento" />
      <p>Cantidad: {cantidad}</p>
      <p>Precio {precio}</p>
      <button
        onClick={() => {
          carritoContext.removeItem(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};
