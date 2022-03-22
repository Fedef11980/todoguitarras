import React from "react";
import ItemCounter from "../Counter/ItemCounter";

function ItemDetails({ guitarra }) {
  return (
    <div>
      {guitarra.map((lista, i) => (
        <li key={i}> {lista.description}</li>
      ))}

      <ItemCounter />
    </div>
  );
}

export default ItemDetails;
