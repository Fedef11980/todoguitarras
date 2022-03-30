import { useEffect, useState } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../Utils/firebase";

export const FirebaseComponent = () => {
  const [productos, setProductos] = useState();
  const [producto, setProducto] = useState({});
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

      //almacenamos cada uno de los productos, con su id e informacion en nuevo arreglo
      const dataItems = response.doc.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("dataItems", dataItems);
      //agregamos los productos desde firestore a nuestra variables productos
      setProductos(dataItems);

      //peticion para un unico documento
      //creamos  nuestra referencia de ese documento
      //seccion de itemDetailContainer
      const queryDoc = doc(db, "items", "jvQC7naMGzPwpv7CcBDy");
      //peticion para obtener el documento desde firestore
      const responseDoc = await getDoc(queryDoc);
      // obtenemos la informacion de nuestro documento en formato json.
      const dataDoc = responseDoc.data();
      console.log("indfo-documentos-unico", dataDoc);
      //id unico del documento.
      console.log("id-documento-unico", responseDoc.id);
      //creamos un nuevo objeto con la informacion y el id
      const newDocumento = { id: responseDoc.id, ...dataDoc };
      //asignamos la informacion de nuestro documento a una variable en nuestro proyecto para pasarselo al componente ItemDetail.
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
