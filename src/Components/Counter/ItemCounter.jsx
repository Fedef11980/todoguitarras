import React from "react";

const ItemCounter = ({ max, contador, setContador, agregar }) => {
  const sumar = () => {
    contador < { max } && setContador(contador + 1);
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div className="p-1 text-center">
      <button className="btn btn-outline-dark " onClick={restar}>
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
        onClick={agregar}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCounter;
