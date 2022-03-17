import React, { useState } from "react";
import { getItem } from "./Guitars";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
  const [guitars, setGuitar] = useState([]);

  const obtenerGuitars = () => {
    getItem()
      .then((resultado) => resultado.json())
      .then((guitarras) => {
        console.log(guitarras.description);
        setGuitar(guitarras.description);
      });
  };
  return (
    <div>
      <button onClick={obtenerGuitars}>Ver detalles</button>
      <ItemDetails lista={guitars} />
    </div>
  );
};

export default ItemDetailContainer;
