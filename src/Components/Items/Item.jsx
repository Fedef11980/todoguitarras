import React from 'react'

const Item = ({ marca, description, model, price, pictureURL }) => {
  return (
    <div className="container py-5">
      <div className="card" style={{ width: "15rem" }}>
        <p className="card-title text-center card-header"> {marca}</p>
        <img src={pictureURL} className="card-img-top" alt="guitarra" />
        <div className="card-body">
          <p className="fw-light"> {model} V</p>
          <p className="fw-light"> {description}</p>
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
              <strong>{price}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Item