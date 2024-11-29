import { useState } from "react";
import { Button } from "../components/Button/Button";
import { clearCart, getCartItems, removeFromCart, CartItem } from "../utilities/cartUtils";
import styles from './Cart.module.css';



export const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCartItems(getCartItems());
    alert('Item removed from cart!');
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems(getCartItems());
    alert('Cart cleard!');
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  }

  if (cartItems.length === 0) {
    return <p className={styles.emptyCart}>Your cart is empty</p>
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Your Cart</h1>
      <ul className={styles.cartList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Price: ${item.totalPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <Button onClick={() => handleRemove(item.id)} className={styles.removeButton}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2> 
      <Button onClick={handleClearCart} className={styles.clearCartButton}>
        Clear Cart
      </Button>
    </div>
  );
}