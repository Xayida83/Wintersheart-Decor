import styles from './Item.module.css';

type ItemProps = {
  id:number;
  name: string;
  price: number;
  imageUrl: string;
};

function Item({ id, name, price, imageUrl }: ItemProps) {
  return (
    <div className={styles.card} data-testid={`item-${id}`}>
      <img src={imageUrl} alt={name} />
      <div className={styles['card-body']}>
        <h3>{name}</h3>
        <p>{price} kr</p>
      </div>
    </div>
  );
}

export default Item;