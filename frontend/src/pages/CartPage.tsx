// import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Button } from "../components/Button/Button";
// import { clearCart, getCartItems, removeFromCart } from "../utilities/cartUtils";
import { CartItemList } from "../components/CartItemList/CartItemList";
import { Header } from "../components/Header/Header";
import styles from './Cart.module.css';

export const CartPage = () => {
  // const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();

  
  if (cartItems.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty</p>
  };

  // const calculateTotal = (): number => {
  //   return cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  // }


  // const handleRemove = (id: number) => {
  //   const confirmRemove = window.confirm("Are you sure you want to remove this item from your cart?");
  //   if (!confirmRemove) return;

  //   removeFromCart(id);
  //   setCartItems(getCartItems());
  // };

  // const handleClearCart = () => {
  //   const confirmRemove = window.confirm("Are you sure you want to clear the cart?");
  //   if (!confirmRemove) return;
  //   clearCart();
  // };

  

  return (
    <div className={styles.cartContainer}>
      <Header title="Your Cart"/>
      <CartItemList items={cartItems} onRemove={removeFromCart} />
      <h2>Total: ${calculateTotal()}</h2> 
      <Button className={styles.button} type="submit">
        Checkout
      </Button>
      <Button onClick={clearCart} className={styles.button} type="reset">
        Clear Cart
      </Button>
    </div>
  );
}