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

  const getTotalPrice = ()=>{
    
    const totalPrice = productosCarrito.reduce((acc,obj)=>acc+(obj.quantity*obj.price),0)
    return totalPrice;
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
    <CartContext.Provider value={{ productosCarrito, addItem, clear, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
