import React, { useState } from 'react';

export const ItemCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
<div>
  <label htmlFor="Quantity" className="sr-only"> Quantity </label>

  <div class="flex items-center gap-1">
    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
      onClick={decrement}
    >
      -
    </button>

    <input
      type="number"
      id="Quantity"
      value="1"
      className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
    />

    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
      onClick={increment}
    >
        +
    </button>
    
  </div>
  <button>Agregar carrito</button>
</div>

  );
};

