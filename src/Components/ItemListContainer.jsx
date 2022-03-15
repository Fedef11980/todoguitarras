import React, {useEffect, useState} from "react";
import ItemList from "../Components/ItemList";

const printGuitars = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (guitars === 0) {
        reject("Consultar Stock");
      } else {
        resolve(guitars);
      }
    }, 2000);
  });
};

const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos]=useState()
  useEffect(()=>{
    printGuitars()
  .then((guitars) => {
    setProductos(guitars)
    return guitars;
  })
  .then((stock) => {
    if (stock.lenght === 2) throw new Error("Quedán 2 en sotck");
  })
  .catch((err) => {
    console.log("Consultar Stock" + err);
  });

  },[] )
  console.log(productos)

  return (
    <>
    <div>
      <h1 className="text-center py2">{titulo}</h1>      
    </div>
    <div>
      <ItemList card={productos} />
    </div>
    </>
  );
};

export default ItemListContainer;
