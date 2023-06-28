import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/ShoppingCartContext';

export const ItemDetail = ({ id, nombre, img, precio, categoria, descripcion, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItems } = useContext(CartContext);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, nombre, precio, stock,img };
    addItems(item, quantity);
    setIsCartClicked(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-lg ${isCartClicked ? 'transform scale-105' : ''} transition duration-300 ease-in-out`}>
        <div className="flex flex-col items-center">
          <img src={img} alt={nombre} className="object-contain h-40 mx-auto" />
          <h3 className="mt-4 text-lg font-medium text-gray-700">{nombre}</h3>
          <p className="mt-2 text-sm text-gray-900">Precio: {precio}</p>
          <p className="mt-2 text-sm text-gray-900">Categoría: {categoria}</p>
          <p className="mt-2 text-sm text-gray-900">Descripción: {descripcion}</p>
          <p className="mt-2 text-xs text-gray-500">Stock: {stock}</p>
        </div>

        <div className="flex justify-center mt-4">
          {quantityAdded > 0 ? (
           <Link to="/cart">
           <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
             Ir al Carrito
           </button>
         </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    
    </div>
  );
};




