import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("foodie-cart")) || []; }
    catch { return []; }
  });

  useEffect(() => localStorage.setItem("foodie-cart", JSON.stringify(cart)), [cart]);

  const addToCart = (food) => {
    setCart(prev => {
      const found = prev.find(item => item.id === food.id);
      if (found) return prev.map(item => item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const increase = id => setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  const decrease = id => setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0));
  const removeFromCart = id => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cart.length ? (subtotal >= 1500 ? 0 : 99) : 0;
  const total = subtotal + deliveryFee;

  const value = useMemo(() => ({ cart, addToCart, increase, decrease, removeFromCart, clearCart, itemCount, subtotal, deliveryFee, total }), [cart, itemCount, subtotal, deliveryFee, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
