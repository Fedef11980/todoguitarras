import React from "react";
import ItemCounter from "../Counter/ItemCounter";

function ItemDetails({ guitarra }) {
  return (
    <div>
      <p>{guitarra?.description}</p>
      <ItemCounter/>       
    </div>
  );
}

export default ItemDetails;
