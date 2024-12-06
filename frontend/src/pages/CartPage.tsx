import { useCart } from "../context/CartContext";
import { Button } from "../components/Button/Button";
import { CartItemList } from "../components/CartItemList/CartItemList";
import { Header } from "../components/Header/Header";
import styles from './Cart.module.css';

export const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();
  
  if (cartItems.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty</p>
  };

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