import React, { useContext, useState } from 'react';
import { CartContext } from "../../context/ShoppingCartContext";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Cart = () => {
  const { cartItems, clearCart, removeItem } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [orderCompleted, setOrderCompleted] = useState(false);

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

  const handleFinalizeOrder = () => {
    setShowForm(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario y finalizar la compra
    // ...

    swal("¡Gracias por tu compra!", {
      icon: "success",
      buttons: false,
      timer: 2000
    }).then(() => {
      setOrderCompleted(true);
    });
  };

  if (orderCompleted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-center">
          ¡Gracias por tu compra! Nos pondremos en contacto contigo pronto.
        </h1>
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
              {!showForm && (
                <>
                  <button
                    className="inline-block py-2 px-4 mt-4 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out"
                    onClick={handleClearCart}
                  >
                    Vaciar Carrito
                  </button>
                  <button
                    className="inline-block py-2 px-4 mt-4 ml-4 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    onClick={handleFinalizeOrder}
                  >
                    Finalizar Compra
                  </button>
                </>
              )}
              {showForm && (
                <form onSubmit={handleSubmitForm} className="mt-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="inline-block py-2 px-4 mt-4 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Confirmar Compra
                  </button>
                </form>
              )}
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


