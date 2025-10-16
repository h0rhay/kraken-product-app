import React, { createContext, useContext, useState, useCallback } from 'react';

interface CartState {
  itemCount: number;
  quantity: number;
}

interface CartActions {
  addToCart: () => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

interface CartContextValue extends CartState, CartActions {}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [itemCount, setItemCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCallback(() => {
    setItemCount(prev => prev + quantity);
    setQuantity(1);
  }, [quantity]);

  const incrementQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  }, []);

  const contextValue = {
    itemCount,
    quantity,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  };

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