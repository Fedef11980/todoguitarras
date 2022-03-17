import React from "react";

const Item = ({ item }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      <div className="col">
        <div className="card">
          <img src={item?.pictureURL} className="card-img-top" alt="guitarra" />
          <div className="card-body">
            <h5 className="card-title text-center">{item?.marca}</h5>
            <p className="card-text">Modelo: {item?.model}</p>
            <p className="card-text">Descripción: {item?.description}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-dark">
              <strong>{item?.price}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
