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
            <div className="col-sm-2 m-1">
              <img src={imagen} className="tamanio" alt="instrumento" />
            </div>
            <div className="col-sm-3 m-1">
              <p>
                <strong>Marca:</strong>
              </p>
              <p>{nombre}</p>
            </div>
            <div className="col-sm-2 m-1">
              <p>
                <strong>Cantidad:</strong>
              </p>
              <p>{cantidad}</p>
            </div>
            <div className="col-sm-2 m-1">
              <p>
                <strong>Precio U$S:</strong>
              </p>
              <p>{precio}</p>
            </div>
            <div className="col-sm-2 m-1">
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
