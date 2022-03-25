import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="container">
    
        <div className="card-colums p-3">
          <h3 className="card-title text-center card-header">{item?.marca}</h3>
          <img
            src={item?.pictureURL}
            alt={item?.pictureURL}
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text text-center">Modelo: {item?.model}</p>
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
     
  );
};

export default Item;
