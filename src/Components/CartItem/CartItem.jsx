import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./CartItem.css";
import {
  collection,
  Timestamp,
  addDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../Utils/firebase";

export const CartItem = ({ imagen, nombre, cantidad, precio, id }) => {
  const carritoContext = useContext(CartContext);
  console.log("CartItem=carritoContext", carritoContext);
  const productosCarrito = carritoContext.productosCarrito;
  //console.log("Cart=productos Carrito", productosCarrito);

  const sendInfo = async (e) => {
    e.preventDefault();
    //console.log("evento formulario", e);
    const name = e.target[0].value;
    const direccion = e.target[1].value;
    const phone = e.target[2].value;
    const email = e.target[3].value;

    //crear objeto con informacion del comprador
    const newOrder = {
      buyer: {
        nombre: name,
        direccion: direccion,
        phone: phone,
        email: email,
      },
      items: productosCarrito,
      total: carritoContext.totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };
    console.log("compra", newOrder);
    //crear referencia de la collección
    const ordersCollection = collection(db, "orders");
    //crear un nuevo doc de la orden
    const docReference = await addDoc(ordersCollection, newOrder);
    console.log("doc creado", docReference);
  };
  const actualizarProd = async () => {
    const docReference = doc(db, "item", "zzpti5niHN7a2GZVpCES");
    const docResponse = await getDoc(docReference);
    const dataDoc = docResponse.data();
    console.log("data", dataDoc);
    await updateDoc(docReference, { ...dataDoc, stock: 15 });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row align-items-center text-center">
          <div className="col-1">
            <img src={imagen} className="tamanio" alt="instrumento" />
          </div>
          <div className="col-4">
            <p>
              <strong>Marca: {nombre}</strong>{" "}
            </p>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                carritoContext.removeItem(id);
              }}
            >
              <FaRegTrashAlt />
            </button>
          </div>
          <div className="col-2">
            <p>Cantidad: {cantidad}</p>
          </div>
          <div className="col-2">
            <p>Precio U$S: {precio}</p>
          </div>
        </div>
      </div>
      <div className="col-5 d-flex justify-content-center py-4 ">
        <form onSubmit={sendInfo}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Nombre
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Dirección
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Teléfono
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              E-mail
            </span>
            <input
              type="mail"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <p className="text-center">
            <strong> Total:U$S {carritoContext.totalPrice()}</strong>
          </p>
          <br />
          <hr />
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className=" btn btn-success light p-2 alignitem-center"
            >
              Enviar orden
            </button>
          </div>
        </form>
      </div>
      <button className="btn" onClick={actualizarProd}>
        Actualizar Producto
      </button>
    </div>
  );
};
