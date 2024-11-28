import ItemComponent from "../Item/ItemComponent";
import styles from './List.module.css';
import { Product } from "../../types/Product";

type ListProps = {
  products: Product[];
};

function ListComponent({ products }: ListProps) {
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

export default ListComponent;
