import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const carritoContext = useContext(CartContext);

  const productosCarrito = carritoContext.productosCarrito;
  console.log("Cart=productos Carrito", productosCarrito);

  return (

    <div className="container">
         <p>cart container</p>
        {
          productosCarrito.length>0 ?
          <div className="row">
            {
                productosCarrito.map(item=>(
                  <CartItem 
                  key={item?.producto.id} 
                  marca= {item?.producto.pictureURL} 
                  nombre={item?.producto.marca}
                  cantidad={item?.quantity}
                  precio={item?.producto.price} 
                  productoProp={item}/>
              ))
            }
            <div>
              <p>Total: {carritoContext.getTotalPrice()}</p>             
            </div>      
          </div>
        :
            <div>
              <p>No hay productos</p>
              <button type="button" className="btn btn-danger text-white"  onClick={carritoContext.clear}>Vaciar carrito</button>
            </div>        
      }    
    </div>
  );
};
