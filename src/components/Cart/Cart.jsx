import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.item.id}>
          <h3>{item.item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          {/* Agrega más detalles del producto, como precio, imagen, etc. */}
        </div>
      ))}
    </div>
  );
}

export default Cart;