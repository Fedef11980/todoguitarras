import React from "react";
import Item from "./Item";

const ItemList = ({ card }) => {
  //console.log(card);
  return (
    <div className="container py-5 ">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {card?.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
