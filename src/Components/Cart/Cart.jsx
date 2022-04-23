import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../Utils/firebase";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import ItemListContainer from "../Listas/ItemListContainer";

export const Cart = () => {
  const carritoContext = useContext(CartContext);
  const productosCarrito = carritoContext.productosCarrito;
  const clear = carritoContext.clear;
  const [orderId, setOrderId] = useState(null);

  const actualizarProd = async () => {
    const docReference = doc(db, "item", "zzpti5niHN7a2GZVpCES");
    const docResponse = await getDoc(docReference);
    const dataDoc = docResponse.data();
    console.log("data", dataDoc);
    await updateDoc(docReference, { ...dataDoc, stock: 15 });
  };
  const sendInfo = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const direccion = e.target[1].value;
    const phone = e.target[2].value;
    const email = e.target[3].value;

    if (e.target[0].length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (e.target[1].length < 2) {
      alert("La dirección debe tener al menos 2 caracteres");
      return;
    }
    if (e.target[2].length < 6) {
      alert("El teléfono debe tener al menos 6 caracteres");
      return;
    }
    if (e.target[3].length < 5) {
      alert("El mail debe tener al menos 5 caracteres");
      return;
    }

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

    const ordersCollection = collection(db, "orders");

    const docReference = await addDoc(ordersCollection, newOrder).then(
      (resp) => {
        productosCarrito.forEach((producto) => {
          const docReference = doc(db, "item", producto.producto.id);
          updateDoc(docReference, {
            stock: producto.producto.stock - producto.quantity,
          });
        });
        setOrderId(resp.id);
        clear();
      }
    );
    console.log("doc creado", docReference);
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Gracias por tu compra</h2>
        <hr />
        <br />
        <h3>Tú numero de orden es: {orderId}</h3>
        <Link to="/" className="btn btn-dark">
          Volver
        </Link>
      </div>
    );
  }

  if (productosCarrito.length === 0) {
    return <ItemListContainer to="/" />;
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-7 d-flex justify-content-center">
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
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-danger text-white my-3  "
                  onClick={carritoContext.clear}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-center">No hay productos en el carrito</h1>
              <div className="d-flex justify-content-center py-5">
                <button className="btn btn-dark d-flex justify-content-center ">
                  <Link className="btn text-white" to="/*">
                    Volver a la tienda
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-5">
          <div className=" d-flex justify-content-center">
            <form onSubmit={sendInfo}>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Dirección
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Teléfono
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  E-mail
                </span>
                <input
                  type="mail"
                  className="form-control"
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
        </div>
        <br />
        <br />
        <br />
        <div className="m-2">
          <button className="btn btn-light" onClick={actualizarProd}>
            Actualizar Producto
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};
