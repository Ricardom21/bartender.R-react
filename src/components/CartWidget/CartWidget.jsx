import React, { useContext } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../../context/ShoppingCartContext';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const numeroItems = getTotalItems();

  return (
    <div className="flex items-center">
      <FiShoppingCart className="mr-2 text-white text-xl" />
      {numeroItems > 0 && (
        <span className="bg-red-500 text-white rounded-full px-1 py-1 text-xs">
          {numeroItems}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
