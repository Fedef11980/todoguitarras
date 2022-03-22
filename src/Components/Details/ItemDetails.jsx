import React from "react";
import ItemCounter from "../Counter/ItemCounter";

function ItemDetails ({ guitarra  }) {
  return (
    <div>
      <h2>{guitarra?.marca}</h2>
      <img src={guitarra?.picture} alt={guitarra?.marca} />
      <p>{guitarra?.description}</p>
      <p>{guitarra?.precio}</p>
      <ItemCounter/>       
    </div>
  );
}

export default ItemDetails;
