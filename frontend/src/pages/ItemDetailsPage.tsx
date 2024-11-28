import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemDetails.module.css';
import { getProductById } from '../utilities/fetchItem';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
};

const ItemDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await getProductById(id!);
        console.log(response.result);
        setProduct(response.result);
      } catch (err) {
        setError('Failed to load product details.');
      } 
      // finally {
      //   setLoading(false);
      // }
    };
    getItem();
  }, [id]);

  // if (loading) return <p className={styles.errormsg}>Loading...</p>;
  if (error) return <p className={styles.errormsg}>{error}</p>;
  if (!product) return <p className={styles.errormsg}>Product not found.</p>;

  const handleAddToCart = () => {
    // Lägg till i kundkorgen (implementera logik)
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className={styles.container}>
      <div>
        <Header title={product.name} />
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
        <div className={styles.buttonDiv}>
          <Button onClick={handleAddToCart} className={styles.addToCartButton} type='button'>
            Add to Cart
          </Button>
        </div>
      </div >
      <div className={styles.info}>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.stock}>In stock: {product.stock}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
      
    </div>
  );
};

export default ItemDetailsPage;