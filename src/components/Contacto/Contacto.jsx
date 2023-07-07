import React from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../index.js';
import swal from 'sweetalert';

const Contacto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const enviar = async (data) => {
    const contacto = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono
    };

    try {
      const docRef = await addDoc(collection(db, 'registro'), contacto);
      console.log('Documento guardado con ID:', docRef.id);

      swal('¡Suscripción exitosa!', 'Pronto te llegará información de nuestros productos.', 'success');
      reset(); // Vaciar los campos del formulario
    } catch (error) {
      console.error('Error al guardar el contacto:', error);
      swal('Error', 'Hubo un error al guardar la suscripción. Por favor, inténtalo nuevamente.', 'error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Contacto</h1>
        <form onSubmit={handleSubmit(enviar)} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block font-bold mb-2">
              Ingresa tu nombre
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Ingresa tu nombre"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              {...register("nombre", { required: true })}
            />
            {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
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
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">Este campo es requerido</span>}
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
              {...register("telefono", { required: true })}
            />
            {errors.telefono && <span className="text-red-500">Este campo es requerido</span>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Suscribir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;




