import React, { useContext, useState } from 'react';
import { CartContext } from "../../context/ShoppingCartContext";
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
  const { cartItems, clearCart, removeItem } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  const total = cartItems.reduce((acc, item) => acc + (item.item.precio * item.quantity), 0);

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  if (showCheckout) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container mx-auto py-8 flex-grow">
          <button onClick={() => setShowCheckout(false)} className="mb-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Volver al carrito
          </button>
          <Checkout />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8 flex-grow">
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
                  <button
                    className="text-red-500"
                    onClick={() => handleRemoveItem(item.item.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <h2 className="text-xl font-bold">Total: {formatPrice(total)}</h2>
              <button
                className="inline-block py-2 px-4 mt-4 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
                onClick={handleClearCart}
              >
                Vaciar Carrito
              </button>
              <button
                className="inline-block py-2 px-4 mt-4 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                onClick={() => setShowCheckout(true)}
              >
                Finalizar compra
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block py-2 px-4 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Volver al Catálogo
        </Link>
      </div>
    </div>
  );
};

export default Cart;





