import { createContext, useState } from 'react';

export const CartContext = createContext({cart:[]});
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems)

  const addItems = (item, quantity)=>{
    if(!isInCart(item.id)){
      setCartItems(prev => [...prev, {item, quantity}])
    } else{
      console.error("NO SE PUEDE AGREGAR MAS O NO ANDA")
    }
  }
  // Aquí puedes definir las funciones para agregar, eliminar, actualizar elementos del carrito, etc.

  const isInCart = (ItemId) => {
    return cartItems.some(i=>i.id === ItemId)
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addItems, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};