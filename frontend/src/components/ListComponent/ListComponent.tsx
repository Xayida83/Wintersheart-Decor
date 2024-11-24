type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

type ListProps = {
  products: Product[];
};

function ListComponent({ products }: ListProps) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} width="100" />
          <h2>{product.name}</h2>
          <p>{product.price} kr</p>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
