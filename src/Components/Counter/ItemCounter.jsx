import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";


const ItemCounter = ({ max, product }) => {
  const [contador, setContador] = useState(1);

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const sumar = () => {
    contador < max && setContador(contador + 1);
  };

  const [agregarIntrumentos, setAgregarInstrumentos] = useState(0);
  console.log("ItemCounter-agregarinstrumentos", agregarIntrumentos);

  const [stockInstrumentos, setStockIntrumentos] = useState(max);
  console.log("stock", stockInstrumentos);

  const agregar = (quantityToAdd) => {
    setAgregarInstrumentos(quantityToAdd);
    setStockIntrumentos(max - quantityToAdd);
    carritoContext.addItem(product, quantityToAdd);
  };

  const carritoContext = useContext(CartContext);
  console.log(carritoContext);

  return (
    <div className="p-1 text-center">
      <button className="btn btn-outline-dark" onClick={restar}>
        -
      </button>
      <span className="mx-3 ">{contador}</span>
      <button className="btn btn-dark " onClick={sumar}>
        +
      </button>
      <br />
      <button
        type="button"
        className="btn btn-warning btn-lg d-grid mx-auto my-2"
        onClick={() => agregar(contador)}
      >
        Comprar
      </button>

      {agregarIntrumentos > 0 && (
        <div className="container">
          <Link to="/*"> Seguir comprando </Link>

          <Link to="/Cart">Finalizar compras</Link>
        </div>
      )}
      
    </div>
  );
};

export default ItemCounter;
