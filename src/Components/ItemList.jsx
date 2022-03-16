import React from "react";
import Item from "./Item";

const ItemList = ({ card }) => {
  console.log(card);
  return (
    <div>
      {card?.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemList;
