import React, { useState } from "react";


const ItemCounter = ({ max, product }) => {

  const [contador, setContador] = useState(0)
  const [cart,setCart] = useState()

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const sumar = () => {
    contador < max  && setContador(contador + 1);
  };

const agregar=()=>{
    setCart(product)
  }

  console.log(cart)

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
