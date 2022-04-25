import React from "react";
import Item from "./Item";

const ItemList = ({ card }) => {
  return (
    <div className="container py-5 ">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {card?.map(
          (producto) =>
            producto.stock !== 0 && <Item key={producto.id} item={producto} />
        )}
      </div>
    </div>
  );
};

export default ItemList;
