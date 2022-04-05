import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const carritoContext = useContext(CartContext);

  const productosCarrito = carritoContext.productosCarrito;
  console.log("Cart=productos Carrito", productosCarrito);

  return (
    <div className="container">
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
            <p>Total:$ {carritoContext.totalPrice()} </p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger text-white"
              onClick={carritoContext.clear}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center">No hay productos =(</h1>
          <Link className="btn btn-dark " to="/*">
            Ir Inicio
          </Link>
        </div>
      )}
    </div>
  );
};
