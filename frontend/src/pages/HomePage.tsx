import { useEffect, useState } from "react";
import { fetchData } from "../utils/httpClient";
import ListComponent from "../components/List/ListComponent";
import { Bird } from "../components/Bird/Bird";
import { Header } from "../components/Header/Header";
import styles from "./homePage.module.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData('products');
        setProducts(data.result.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

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

export default HomePage;