import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const addItem = (producto, quantity) => {
    const newProduct = {
      producto,
      quantity,
    };
    const productIn = productosCarrito.find(
      (product) => product.producto.id === producto.id
    );
    if (productIn) {
      console.log("entre al if");
      const newCart = productosCarrito.filter(
        (product) => product.producto.id !== producto.id
      );
      productIn.quantity += quantity;
      setProductosCarrito([...newCart, productIn]);
    } else {
      setProductosCarrito([...productosCarrito, newProduct]);
    }
  };

  const clear = () => {
    setProductosCarrito([]);
  };

  const totalPrice = () => {
    return productosCarrito.reduce(
      (acc, prod) => acc + prod.producto.price * prod.quantity,
      0
    );
  };
  console.log("Precio total", totalPrice());

  const contadorCarritoNavBar = () => {
    const totalproductos = productosCarrito.reduce(
      (acc, producto) => acc + producto.quantity,
      0
    );
    return totalproductos;
  };

  const removeItem = (itemId) => {
    console.log("itemId", itemId);
    const nuevosProductos = productosCarrito.filter(
      (producto) => producto.producto.id !== itemId
    );
    console.log("nuevosProductos", nuevosProductos);
    setProductosCarrito(nuevosProductos);
  };

  return (
    <CartContext.Provider
      value={{
        productosCarrito,
        addItem,
        clear,
        totalPrice,
        contadorCarritoNavBar,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
