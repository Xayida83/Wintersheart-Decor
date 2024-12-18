import { useEffect, useState } from "react";
import { ListComponent } from "../components/List/ListComponent";
import { Bird } from "../components/Bird/Bird";
import { Header } from "../components/Header/Header";
import { fetchData } from "../utilities/fetchData";
import { Product } from "../types/Product";
import { FeedbackMessage } from "../components/FeedbackMessage/FeedbackMessage";
import styles from "./homePage.module.css";

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts  = async () => {
      try {
        const data: Product[] = await fetchData<Product[]>('products');
        setProducts(data);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts ();
  }, []);

  if (loading) return <FeedbackMessage type='loading'/>;
  if (error) return <FeedbackMessage type='error'/>;
  if (!products) return <FeedbackMessage type='error'/>;
  
  return (
    <div>
      <div className={styles.headerdiv}>
        <Bird />
        <Header title='Wintersheart Decor' />
      </div>
      <ListComponent products={products} />
    </div>
  );
}
