import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const carritoContext = useContext(CartContext);
  const productosCarrito = carritoContext.productosCarrito;
  //console.log("Cart=productos Carrito", productosCarrito);

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
              <div>
                <button
                  type="button"
                  className="btn btn-danger text-white my-3 d-flex justify-content-center "
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
        <br /> <br /> <br />
      </div>
    </div>
  );
};
