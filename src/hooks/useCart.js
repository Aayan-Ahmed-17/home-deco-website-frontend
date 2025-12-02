import { useState } from 'react';

export const useCart = () => {
  // Non-persistent state - initializes empty every time
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If exists, increment quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new, add with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or negative
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total number of items
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  };
};
