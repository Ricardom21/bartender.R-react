import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/ShoppingCartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../index.js';
import swal from 'sweetalert';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const {  handleSubmit } = useForm();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const comprar = () => {
    const pedido = {
      cliente: {
        nombre,
        email,
        telefono
      },
      productos: cartItems
    };

    addDoc(collection(db, 'orders'), pedido)
      .then((docRef) => {
        const orderId = docRef.id;
        swal('¡Orden realizada! Gracias por su compra', `ID de la orden: ${orderId}`, 'success');
        clearCart();
        setNombre('');
        setEmail('');
        setTelefono('');
      })
      .catch((error) => {
        console.error('Error al guardar la orden:', error);
      });
  };

  const onSubmit = () => {
    comprar();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Finalizar Compra</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block font-bold mb-2">
              Ingresa tu nombre
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingresa tu nombre"
              onChange={handleNombreChange}
              value={nombre}
              name="nombre"
              required
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Ingresa tu email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu email"
              onChange={handleEmailChange}
              value={email}
              name="email"
              required
              className="border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block font-bold mb-2">
              Ingresa tu teléfono
            </label>
            <input
              type="number"
              id="telefono"
              placeholder="Ingresa tu teléfono"
              onChange={handleTelefonoChange}
              value={telefono}
              name="telefono"
              required
              className="border border-gray-300 px-3 py-2 rounded"
              style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700text-white font-bold py-2 px-4 rounded"
            >
              Comprar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;






