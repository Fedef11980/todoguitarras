import React from "react";
import Item from "./Item";

const ItemList = ({ printGuitars }) => {
  return (
    <div>
      {printGuitars.map((item) => (
        <Item
          marca={Item.marca}
          description={Item.description}
          model={Item.model}
          price={Item.price}
          pictureURL={Item.pictureURL}
        />
      ))}
    </div>
  );
};

export default ItemList;
