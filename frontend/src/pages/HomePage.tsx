import { useEffect, useState } from "react";
import { fetchData } from "../utils/httpClient";
import ListComponent from "../components/List/ListComponent";

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
      <h1>Products</h1>
      <ListComponent products={products} />
    </div>
  );
}

export default HomePage;