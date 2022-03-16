import React, { useState } from "react";

const ItemCounter = () => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container py-5">
      <div className="card" style={{ width: "15rem" }}>
        <p className="card-title text-center card-header"> Gibson</p>
        <img
          src="../img/gibsonFlyingV.png"
          className="card-img-top"
          alt="guitarra"
        />
        <div className="card-body">
          <p className="fw-light"> Modelo: Flying V</p>
          <p className="fw-light"> Cuerpo: sólido</p>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-dark" onClick={restar}>
              -
            </button>
            <button className="btn btn-white text-center">{contador}</button>
            <button className="btn btn-dark" onClick={sumar}>
              +
            </button>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-dark">
              <strong>Comprar</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCounter;
