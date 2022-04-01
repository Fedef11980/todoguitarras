import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const carritoContext = useContext(CartContext);

  const productosCarrito = carritoContext.productosCarrito;
  console.log("Cart=productos Carrito", productosCarrito);

  return (
    <div className="container">
      <div className="row">
        {productosCarrito.length > 0 ? (
          <div>
            {productosCarrito.map((item) => (
              <CartItem
                key={item?.producto.id}
                imagen={item?.producto.pictureURL}
                nombre={item?.producto.marca}
                cantidad={item?.quantity}
                precio={item?.producto.price}
                productoProp={item}
              />
            ))}
            <div>
              <p>Total:${totalPrice()} </p>
            </div>
          </div>
        ) : (
          <div>
            <p>No hay productos</p>
            <button
              type="button"
              className="btn btn-danger text-white"
              onClick={carritoContext.clear}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
