import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Utils/firebase";

const ItemListContainer = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const query = collection(db, "item");

      const response = await getDocs(query);

      const dataItem = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setLoading(false);

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
    <div className="d-flex justify-content-center">
      {loading ? (
        <div className="spinner-border  m-5" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      ) : (
        <ItemList card={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
