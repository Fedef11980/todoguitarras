import React from "react";
import ItemCounter from "../Counter/ItemCounter";

function ItemDetail({ guitarra }) {
  return (
    <>
      <div className="card mb-3 max-width: 540px">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={guitarra?.pictureURL}
              className="img-fluid rounded-start"
              alt={guitarra?.pictureURL}
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
    </>
  );
}

export default ItemDetail;
