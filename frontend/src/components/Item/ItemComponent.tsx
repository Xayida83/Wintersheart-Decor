import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { Product } from '../../types/Product';


function Item({ id, name, price, imageUrl }: Product) {
  return (
    <Link to={`/itemdetails/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Item;