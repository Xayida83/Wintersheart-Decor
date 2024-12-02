export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export type DetailedProduct = Product & {
  stock: number;
  description: string;
};

export type CartItem = Product & {
  totalPrice: number;
  quantity: number;
}
