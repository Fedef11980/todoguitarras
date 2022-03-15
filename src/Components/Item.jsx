import React from 'react'

const Item = ({ item }) => {
  return (
    <div className="container py-5">
      <div className="card" style={{ width: "15rem" }}>
        <p className="card-title text-center card-header"> {item?.marca}</p>
        <img src={item?.pictureURL} className="card-img-top" alt="guitarra" />
        <div className="card-body">
          <p className="fw-light"> {item?.model} V</p>
          <p className="fw-light"> {item?.description}</p>
          <div className="d-flex justify-content-center ">
            <button className="btn btn-dark"> - </button>
            <button className="btn btn-white text-center"></button>
            <button className="btn btn-dark"> + </button>
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


export default Item