import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  const addItems = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCartItems((prev) => [...prev, { item, quantity }]);
    } else {
      console.error("NO SE PUEDE AGREGAR MAS O NO ANDA");
    }
  };

  const isInCart = (itemId) => {
    return cartItems.some((i) => i.item.id === itemId);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItems,
        isInCart,
        getTotalItems,
        clearCart,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};