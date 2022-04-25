import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div className="container my-5">
      <h2>Gracias por tu compra!</h2>
      <hr />
      <h4>Tu número de orden es: {}</h4>
      <Link to="/" className="btn btn-dark">
        Volver
      </Link>
      <br />
      <h5>Gracias por tu compra!!</h5>
    </div>
  );
};
