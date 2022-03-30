import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const carritoContext = useContext(CartContext);

  const productosCarrito = carritoContext.productosCarrito;
  console.log("productos Carrito", productosCarrito);

  return (
    <div>
      {productosCarrito.map((item) => (
        <CartItem
          key={item.producto.id}
          imagen={item.producto.pictureURL}
          nombre={item.producto.marca}
          cantidad={item.quantity}
          precio={item.producto.price}
        />
      ))}
      <button onClick={carritoContext.clear}>Vaciar carrito</button>
    </div>
  );
};
