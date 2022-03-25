import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="row-cols-md-4 g-4">
      <div className="col">
        <div className="card">
          <p className="card-title text-center card-header">{item?.marca}</p>
          <img
            src={item?.pictureURL}
            alt={item?.pictureURL}
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">Modelo: {item?.model}</p>
          </div>

          <div className="d-flex justify-content-center pb-3">
            <Link to={`/detail/${item?.id}`}>
              <button type="button" className="btn btn-dark">
                <strong>Ver detalles</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
