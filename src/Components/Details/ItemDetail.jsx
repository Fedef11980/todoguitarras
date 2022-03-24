import React, { useState } from "react";
import ItemCounter from "../Counter/ItemCounter";

const ItemDetail = ({ guitarra }) => {
  const [contador, setContador] = useState(0);

  const agregar = () => {
    const cart =
      { 
        {guitarra?.id}
        {guitarra?.nombre}
        {guitarra?.precio}
        {guitarra?.pictureURL}
        contador,
       } 
        console.log(cart);
  };

  return (
    <>
      <div className="card mb-3 max-width:600px">
        <div className="row g-0">
          <div className="col-md-4 rounded">
            <img
              src={guitarra?.pictureURL}
              className="img-fluid rounded-start"
              alt={guitarra?.pictureURL}
            />
            <ItemCounter
              max={guitarra?.stock}
              contdor={contador}
              setContador={setContador}
              agregar={agregar}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{guitarra?.marca}</h1>
              <h3 className="card-title">{guitarra?.model} </h3>
              <p className="card-text">{guitarra?.description}</p>
              <p className="card-text text-muted">U$S: {guitarra?.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ItemDetail;
