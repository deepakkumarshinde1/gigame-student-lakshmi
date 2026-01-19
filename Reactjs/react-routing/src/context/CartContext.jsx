import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { product, quantity }

  function addToCart(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((p) => p.product.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + qty } : p
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }

  function removeFromCart(productId) {
    setItems((prev) => prev.filter((p) => p.product.id !== productId));
  }

  function clearCart() {
    setItems([]);
  }

  const itemCount = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
