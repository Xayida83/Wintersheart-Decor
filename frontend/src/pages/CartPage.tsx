import { useState } from "react";
import { Button } from "../components/Button/Button";
import { clearCart, getCartItems, removeFromCart, CartItem } from "../utilities/cartUtils";
import { CartItemList } from "../components/CartItemList/CartItemList";
import { Header } from "../components/Header/Header";
import styles from './Cart.module.css';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

  const handleRemove = (id: number) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item from your cart?");
    if (!confirmRemove) return;

    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleClearCart = () => {
    const confirmRemove = window.confirm("Are you sure you want to clear the cart?");
    if (!confirmRemove) return;
    clearCart();
    setCartItems(getCartItems());
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  }

  if (cartItems.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty</p>
  };

  return (
    <div className={styles.cartContainer}>
      <Header title="Your Cart"/>
      <CartItemList items={cartItems} onRemove={handleRemove} />
      <h2>Total: ${calculateTotal()}</h2> 
      <Button className={styles.button} type="submit">Checkout</Button>
      <Button onClick={handleClearCart} className={styles.button} type="reset">
        Clear Cart
      </Button>
    </div>
  );
}