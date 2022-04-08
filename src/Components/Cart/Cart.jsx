import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import {
  collection,
  Timestamp,
  addDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../Utils/firebase";

export const Cart = () => {
  const carritoContext = useContext(CartContext);

  const productosCarrito = carritoContext.productosCarrito;
  //console.log("Cart=productos Carrito", productosCarrito);

  const sendInfo = async (e) => {
    e.preventDefault();
    //console.log("evento formulario", e);
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    //crear objeto con informacion del comprador
    const newOrder = {
      buyer: {
        nombre: name,
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
    <div className="container ">
      <div className="row">
        <div className="col-8 col-4 d-flex justify-content-center">
          {productosCarrito.length > 0 ? (
            <div>
              {productosCarrito.map((item) => (
                <CartItem
                  key={item?.producto.id}
                  imagen={item?.producto.pictureURL}
                  nombre={item?.producto.marca}
                  cantidad={item?.quantity}
                  precio={item?.producto.price}
                  id={item?.producto.id}
                  productoProp={item}
                />
              ))}
              <div>
                <button
                  type="button"
                  className="btn btn-danger text-white my-3 col-4 d-flex justify-content-center "
                  onClick={carritoContext.clear}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-center">No hay productos </h1>
              <Link className="btn btn-dark " to="/*">
                Volver a la tienda
              </Link>
            </div>
          )}
        </div>
        <div className="col-4 d-flex justify-content-center ">
          <form onSubmit={sendInfo}>
            <input
              type="text"
              placeholder="Nombre"
              className="align-items-center my-3"
            />
            <br />
            <input
              type="text"
              placeholder="phone"
              className="align-items-center my-3"
            />
            <br />
            <input
              type="mail"
              placeholder="mail"
              className="align-items-center my-3"
            />
            <br />
            <p className="text-center">
              <strong> Total:U$S {carritoContext.totalPrice()}</strong>
            </p>
            <br />
            <hr />
            <button
              type="submit"
              className=" btn btn-success light p-2 alignitem-center"
            >
              Enviar orden
            </button>
          </form>
        </div>
        <br /> <br /> <br />
        <button className="btn" onClick={actualizarProd}>
          Actualizar Producto
        </button>
      </div>
    </div>
  );
};
