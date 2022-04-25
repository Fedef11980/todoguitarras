import { useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../Utils/firebase";

export const FirebaseComponent = () => {
  const [productos, setProductos] = useState();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log("respuesta", response);
      console.log("info-documento", response.doc[0].data());
      console.log("id-documento", response.doc[0].id);

      const dataItems = response.doc.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("dataItems", dataItems);
   
      setProductos(dataItems);

      const queryDoc = doc(db, "items", "jvQC7naMGzPwpv7CcBDy");
     
      const responseDoc = await getDoc(queryDoc);
  
      const dataDoc = responseDoc.data();
      console.log("indfo-documentos-unico", dataDoc);
    
      console.log("id-documento-unico", responseDoc.id);
      const newDocumento = { id: responseDoc.id, ...dataDoc };
      console.log("newDocumento", newDocumento);
    };
    getData();
  }, []);

  return(
    <div>
        <strong>Coleccion de productos</strong>
        {productos.map(producto=>(
            <div key={producto.id} style={{background:"orange", margin:"10px"}}>
                <p>Title: {producto.title}</p>
                <img style={{width:"100px"}} src={producto.pictureUrl} alt="imagen"/>
            </div>
        ))}

        -------------------
        <br/>
        <strong>Documento individual</strong>
        <div style={{margin:"10px"}}>
            <em>{JSON.stringify(producto)}</em>
        </div>
    </div>
  )
};
