import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

interface CartState {
  itemCount: number;
}

interface CartActions {
  increment: () => void;
  decrement: () => void;
  addToCart: (quantity: number) => void;
}

interface CartContextValue extends CartState, CartActions {}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [itemCount, setItemCount] = useState(0);

  const increment = useCallback(() => {
    setItemCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setItemCount(prev => prev - 1);
  }, []);

  const addToCart = useCallback((quantity: number) => {
    setItemCount(prev => prev + quantity);
  }, []);

  const contextValue = useMemo(() => ({
    itemCount,
    increment,
    decrement,
    addToCart,
  }), [itemCount, increment, decrement, addToCart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}