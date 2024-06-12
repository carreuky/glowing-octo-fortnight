import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.key === product.key);
    if (existingItem) {
      return;
    }

    const cartItem = {
      ...product,
      quantity: 1, // default quantity
      total: product.selling_price * 1 // quantity * selling price
    //   selling_price: product.selling_price,
    //   buying_price: product.buying_price,
    };
    setCart([...cart, cartItem]);
  };

 

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};
