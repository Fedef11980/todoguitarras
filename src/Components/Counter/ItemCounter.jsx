import React, { useState } from "react";

const ItemCounter = ({ guitar }) => {
  const [contador, setContador] = useState;

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button className="btn btn-outline-primary" onClick={restar}>
        -
      </button>
      <span className="mx-3">contador</span>
      <button className="btn btn-primary" onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default ItemCounter;
