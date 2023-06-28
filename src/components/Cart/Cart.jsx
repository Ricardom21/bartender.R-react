import React, { useContext } from 'react';
import { CartContext } from "../../context/ShoppingCartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  const total = cartItems.reduce((acc, item) => acc + (item.item.precio * item.quantity), 0);

  return (
    <div className="container mx-auto py-8">
      {cartItems.length === 0 ? (
        <h1 className="text-2xl font-bold text-center">No hay productos en el carrito</h1>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.item.id} className="flex items-center space-x-4 my-4">
              <img src={item.item.img} alt={item.item.nombre} className="w-16 h-16 object-cover" />
              <div>
                <h1 className="text-lg font-bold">{item.item.nombre}</h1>
                <h2>Cantidad: {item.quantity}</h2>
                <h2>Precio: {formatPrice(item.item.precio)}</h2>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Total: {formatPrice(total)}</h2>
            <Link
              to="/"
              className="block mt-4 py-2 px-4 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out text-center"
            >
              Volver al Catálogo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;