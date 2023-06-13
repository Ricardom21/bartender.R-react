import React, { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
   if ( count < stock){
      setCount(count +1 );
    };
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <label htmlFor="Quantity" className="sr-only"> 
      {" "}
      Quantity {" "}
      </label>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 border border-gray-300 rounded-md"
          onClick={decrement}
        >
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value={count}
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 border border-gray-300 rounded-md"
          onClick={increment}
        >
          +
        </button>
      </div>
      <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onAdd(count)}
        disable={!stock}
        >
        Agregar al carrito
      </button>
    </div>
  );
};

