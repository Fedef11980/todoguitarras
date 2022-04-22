import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/firebase";

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "item");

      const response = await getDocs(query);

      const dataItem = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("dataItem", dataItem);
      const printIntruments = () => {
        if (!categoryId) {
          setProducts(dataItem);
        } else {
          setProducts(dataItem.filter((prod) => prod.categoria === categoryId));
        }
      };
      printIntruments();
    };
    getData();
  }, [categoryId]);

  return (
    <div>
      <h1 className="text-center py2">Todo Guitarra</h1>
      {<ItemList card={productos} />}
    </div>
  );
};

export default ItemListContainer;
