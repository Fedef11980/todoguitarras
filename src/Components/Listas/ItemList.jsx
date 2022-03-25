import React from "react";
import Item from "./Item";

const ItemList = ({ card }) => {
  //console.log(card);
  return (
    <div className="container py-5 ">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {card?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
