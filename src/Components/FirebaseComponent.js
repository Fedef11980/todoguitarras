import { useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../Utils/firebase";

export const FirebaseComponent = () => {
  const [productos, setProductos] = useState();
  useEffect(() => {
    const getData = async () => {
      // referencia en la base de datos de la informacion que quiero obtener
      const query = collection(db, "items");
      //obtener los documentos dentro de la coleccion de items
      const response = await getDocs(query);
      //obtener la informacion del documento y del idx
      console.log("respuesta", response);
      console.log("info-documento", response.doc[0].data());
      console.log("id-documento", response.doc[0].id);

      // const newDoc= {
      //    id: doc.id
      //    data: doc.data

      const dataItems = response.doc.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("dataItems", dataItems);
      setProductos(dataItems);

      // peticion para un unico documento
      //creamos  nuestra referencia de ese documento
      //seccion de itemDetailContainer
      const queryDoc = doc(db, "items", "id que me da firebase");
      const responseDoc = await getDoc(queryDoc);
      const dataDoc = responseDoc.data();
      console.log("indfo-documetnos-unico", dataDoc);
      console.log("id-documento-unico", responseDoc.id);
      const newDocumento = { id: responseDoc.id, ...dataDoc };
      console.log("newDocumetno", newDocumento);
    };
    getData();
  }, []);

  return <div>


      
  </div>;
};
