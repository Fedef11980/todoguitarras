import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./CartItem.css";

export const CartItem = ({ imagen, nombre, cantidad, precio, id }) => {
  const carritoContext = useContext(CartContext);

  return (
    <div className="container ">
      <div className="row">
        <div className="col text-center">
          <div className="row">
            <div className="col-sm-2 ">
              <img src={imagen} className="tamanio" alt="instrumento" />
            </div>
            <div className="col-sm-4">
              <p>Marca: {nombre}</p>
            </div>
            <div className="col-sm-2">
              <p>Cantidad: {cantidad}</p>
            </div>
            <div className="col-sm-2">
              <p>Precio U$S: {precio}</p>
            </div>
            <div className="col-sm-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  carritoContext.removeItem(id);
                }}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
