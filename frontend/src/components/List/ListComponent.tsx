import styles from './List.module.css';
import { Product } from "../../types/Product";
import { ItemComponent } from '../Item/ItemComponent';

type ListProps = {
  products: Product[];
};

export const ListComponent = ({ products }: ListProps) => {
  return (
    <div className={styles['list-grid']}>
      {products.map((product) => (
        <ItemComponent
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}
