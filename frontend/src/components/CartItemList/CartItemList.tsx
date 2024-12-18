import { Button } from "../Button/Button"
import { CartItem } from "../../types/Product";
import { Link } from "react-router-dom";
import styles from './CartItemList.module.css';

type CartItemListProps = {
  items: CartItem[];
  onRemove: (id: number) => void;
};

export const CartItemList = ({ items, onRemove }: CartItemListProps) => {
  return (
    <ul className={styles.cartList}>
      {items.map((item) => (
        <li key={item.id} className={styles.cartItem}>
          <img src={item.imageUrl} alt={item.name} />
          <div className={styles.cartInfo}>
            <Link to={`/itemdetails/${item.id}`} className={styles.itemLink}>
             <p>{item.name}</p>
            </Link>
            <p>Price: ${item.totalPrice}</p>
            <p>{item.quantity}</p>
            <Button onClick={() => onRemove(item.id)} className={styles.removeButton} type="reset">
              Remove
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};