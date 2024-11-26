import { Link } from 'react-router-dom';
import styles from './Item.module.css';

type ItemProps = {
  id:number;
  name: string;
  price: number;
  imageUrl: string;
};

function Item({ id, name, price, imageUrl }: ItemProps) {
  return (
    <Link to={`/itemdetails/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{price} kr</p>
        </div>
      </div>
    </Link>
  );
}

export default Item;