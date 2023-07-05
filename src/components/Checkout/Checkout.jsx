import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/ShoppingCartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../index.js';
import swal from 'sweetalert';

const Checkout = ({ handleFinalizeOrder }) => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const comprar = () => {
    const order = {
      cliente: {
        nombre,
        email,
        telefono
      },
      productos: cartItems
    };

    addDoc(collection(db, 'orders'), order)
      .then((docRef) => {
        const orderId = docRef.id;
        swal('¡Orden realizada!', `ID de la orden: ${orderId}`, 'success');
        handleFinalizeOrder();
        clearCart();
      })
      .catch((error) => {
        console.error('Error al guardar la orden:', error);
      });
  };

  const onSubmit = (data) => {
    setNombre(data.nombre);
    setEmail(data.email);
    setTelefono(data.telefono);
    comprar();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
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
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              {...register('nombre')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Ingresa tu email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Ingresa tu email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              {...register('email')}
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block font-bold mb-2">
              Ingresa tu teléfono
            </label>
            <input
              type="text"
              id="telefono"
              placeholder="Ingresa tu teléfono"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              {...register('telefono')}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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



