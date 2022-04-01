import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const addItem = (producto, quantity) => {
    const newProduct = {
      producto,
      quantity,
    };

    console.log("newProduct", newProduct);
    setProductosCarrito([...productosCarrito, newProduct]);
  };

  const clear = () => {
    setProductosCarrito([]);
  };

  const totalPrice = () => {
    return productosCarrito.reduce(
      (acc, prod) => acc + prod.item.price * prod.count,
      0
    );
  };
  console.log(totalPrice);

  const contadorCarritoNavBar = () => {
    const totalproductos = productosCarrito.reduce(
      (acc, producto) => acc + producto.quantity,
      0
    );
    return totalproductos;
  };

  /*
  const removeItem = (itemId) => {
    console.log("itemId", itemId);
    const nuevosProductos = productosCarrito.filter(
      (producto) => producto.item.id !== itemId
    );
    console.log("nuevosProductos", nuevosProductos);
    setProductosCarrito(nuevosProductos);
  };*/

  return (
    <CartContext.Provider
      value={{
        productosCarrito,
        addItem,
        clear,
        totalPrice,
        contadorCarritoNavBar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
