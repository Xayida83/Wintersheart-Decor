import { Product } from "../types/Product";

//* Typ för en kundkorgsartikel
export type CartItem = Product & { quantity: number; totalPrice: number };

//* Kundkorgens tillstånd (i minnet för enkelhet)
let cart: CartItem[] = [];

//* lägg till vara i kundkorgen
export const addToCart = (product: Product) => {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    //om varand finns, öka kvantiteten
    existingItem.quantity += 1;
    existingItem.totalPrice = existingItem.quantity * existingItem.price;
  } else {
    //annars, lägg till varan med en kvantitet på 1
    cart.push({
      ...product,
       quantity: 1,
      totalPrice: product.price });
  }
};

//* Hämta alla varor i kundkorgen
export const getCartItems = (): CartItem[] => {
  return cart;
};

//* Ta bort en vara från kundkorgen
export const removeFromCart = (id: number) => {
  cart = cart.filter((item) => item.id !== id);
};

//* Rensa hela kundkorgen
export const clearCart = () => {
  cart = [];
}