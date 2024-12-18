import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import { DetailedProduct} from '../types/Product';
import { FeedbackMessage } from '../components/FeedbackMessage/FeedbackMessage';
import { fetchData } from '../utilities/fetchData';
import styles from './ItemDetails.module.css';
import { useCart } from '../context/CartContext';

export const ItemDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await fetchData<DetailedProduct>(`products/${id}`);
        setProduct(product);
      } catch (err) {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <FeedbackMessage type='loading'/>;
  if (error) return <FeedbackMessage type='error'/>;
  if (!product) return <FeedbackMessage type='error'/>;

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} has been added to your cart!`);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Header title={product.name} />
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
        <div className={styles.buttonDiv}>
          <Button onClick={handleAddToCart} className={styles.addToCartButton} type='submit'>
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
