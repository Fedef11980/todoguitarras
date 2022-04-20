import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Utils/firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();
  console.log(itemId);

  useEffect(() => {
    const getDataDoc = async () => {
      const queryDoc = doc(db, "item", itemId);
      const responseDoc = await getDoc(queryDoc);
      const dataDoc = responseDoc.data();
      const nuevoDoc = { id: responseDoc.id, ...dataDoc };
      setItem(nuevoDoc);
    };
    getDataDoc();
  }, []);

  return (
    <div>
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail guitarra={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
