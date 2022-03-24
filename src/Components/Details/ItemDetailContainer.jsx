import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { printGuitars } from "../Listas/ItemListContainer";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  console.log(itemId);

  useEffect(() => {
    printGuitars()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail guitarra={item} />}

     
    </div>
  );
};

export default ItemDetailContainer;
