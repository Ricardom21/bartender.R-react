import React from 'react';

export const Item = (props) => {
  const { nombre, img, precio, stock } = props;
  return (
    <div className="group border border-gray-300 rounded-lg flex flex-col">
      <div className="flex-shrink-0">
      <img src={img} alt={nombre} className="object-cover w-full h-[220px]" />
      </div>

      <div className="flex-grow p-6">
        <h3 className="text-lg font-medium text-gray-700">
          {nombre}
        </h3>

        <p className="mt-2 text-sm text-gray-900">
          Precio: {precio}
        </p>

        <p className="mt-1.5 text-xs text-gray-500">
          Stock: {stock}
        </p>

        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Ver detalles
        </button>
      </div>
    </div>
  );
};