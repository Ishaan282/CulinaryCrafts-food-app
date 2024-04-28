import { useState } from 'react';
import { PRODUCTS } from '../products';

export const useCartFunctions = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productId) => {
    const product = PRODUCTS.find(item => item.id === productId);
    if (product) {
      const existingItem = cartItems.find(item => item.id === productId);
      if (!existingItem) {
        setCartItems([...cartItems, product]);
      }
    }
  };

  const removeItemFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    calculateTotalPrice
  };
};
