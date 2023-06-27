import React, { useContext } from 'react';
import { CartContext } from "../../context/ShoppingCartContext"
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>No hay productos en el carrito</h1>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h1>{item.nombre}</h1>
            <h2>{item.quantity}</h2>
          </div>
        ))
      )}
      <Link to="/" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
        Volver al Catálogo
      </Link>
    </div>
  );
}
export default Cart;