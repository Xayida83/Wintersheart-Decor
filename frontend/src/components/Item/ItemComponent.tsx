import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import styles from './Item.module.css';

export const ItemComponent = ({ id, name, price, imageUrl }: Product) => {
  return (
    <Link to={`/itemdetails/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </Link>
  );
}
