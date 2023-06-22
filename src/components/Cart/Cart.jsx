import React, { useContext } from 'react';
import { CartContext } from "../../context/ShoppingCartContext"
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)
  return (
    <div>
      { cartItems.length == 0
      ? <h1>No hay productos en el carrito</h1>
      :
      cartItems.map((item) => {
        return(
          <div>
            <h1>{item.item.nombre}</h1>
            <h2>{item.quantity}</h2>
          </div>
        )
      })
      }
    </div>
  );
}
export default Cart;