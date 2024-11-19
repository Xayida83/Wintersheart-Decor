import { productModel } from "./productsModel.mjs";

export class itemModel extends productModel {
  constructor(
    id, name, price, imageUrl, description, stock, category
  ){
    super(id, name, price, imageUrl);

    this.description = description;
    this.stock = stock;
    this.category = category;
  }
}