import { createContext, useContext, useState } from "react";
import { CartItem } from "../types/Product";
import { Product } from "../types/Product";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  calculateTotal: () => number;
  calculateCartQuantity: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + product.price }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, totalPrice: product.price }];
    });
  };

  const removeFromCart = (id: number) => {
    const confirmClear = window.confirm("Are you sure you want to remove this item from your cart?");
    if (!confirmClear) return;

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    const confirmClear = window.confirm("Are you sure you want to clear the entire cart?");
    if (!confirmClear) return;

    setCartItems([]);
  };
 
  const calculateTotal = (): number => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const calculateCartQuantity = (): number => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0); 
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, calculateTotal, calculateCartQuantity, }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
