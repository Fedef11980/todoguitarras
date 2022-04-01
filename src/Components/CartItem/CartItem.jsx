import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./CartItem.css";

export const CartItem = ({ imagen, nombre, cantidad, precio, id }) => {
  const carritoContext = useContext(CartContext);
  console.log("CartItem=carritoContext", carritoContext);

  return (
    <div className="container">
      <div className="row">       
          <div className="row align-items-center text-center">
            <div className="col-1">
              <img src={imagen} className="tamanio" alt="instrumento" />  
            </div>
            <div className="col-4">
              <p> <strong>Marca: {nombre}</strong> </p>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-secondary"
              onClick={() => {
                carritoContext.removeItem(id);
              }}
              >
              <FaRegTrashAlt />
              </button>
            </div>
            <div className="col-2">
              <p>Cantidad: {cantidad}</p>
            </div>
            <div className="col-2">
              <p>Precio U$S: {precio}</p>
            </div>
          </div>        
      </div>      
    </div>
  );
};
