import React from "react";
import ItemCounter from "../Counter/ItemCounter";
import "./ItemDetails.css";

const ItemDetail = ({ guitarra }) => {
  return (
    <>
      <div className="container py-5">
        <div className="row tarjeta">
          <div className="card mb-3 ">
            <div className="row tarjeta">
              <div className="col-md-4 rounded ">
                <img
                  src={guitarra?.pictureURL}
                  className="img-fluid rounded-start tarjeta"
                  alt={guitarra?.pictureURL}
                />
              </div>
              <div className="col-md-8 p-10">
                <div className="card-body fondo">
                  <h1 className="card-title">{guitarra?.marca}</h1>
                  <h3 className="card-title">{guitarra?.model} </h3>
                  <p className="card-text">{guitarra?.description}</p>
                  <h5 className="card-text text-muted">
                    Precio U$S: {guitarra?.price}
                  </h5>
                  <ItemCounter max={guitarra?.stock} product={guitarra} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
