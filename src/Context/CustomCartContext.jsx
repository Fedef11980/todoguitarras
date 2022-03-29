import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const addItem = (item, quantity) => {
    const newProduct = {
      item,
      quantity,
    };
    console.log("newProduct", newProduct);
    setProductosCarrito([...productosCarrito, newProduct]);
  };

  const removeItem = (itemId) => {
    console.log("itemId", itemId);
    const nuevosProductos = productosCarrito.filter(
      (producto) => producto.item.id !== itemId
    );
    console.log("nuevosProductos", nuevosProductos);
    setProductosCarrito(nuevosProductos);
  };

  const clear = () => {
    setProductosCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{ productosCarrito, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
