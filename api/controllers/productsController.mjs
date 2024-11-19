import { itemModel } from "../models/ItemModel.mjs";
import { productModel } from "../models/productsModel.mjs";
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.JSON_SERVER_BASE_URL;

export const listProducts = async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();

    const items = [];
    result.map((product) => {
      items.push(
        new productModel(product.id, product.name, product.price, product.imageUrl)
      );
    });

    res.status(200).json({
      success: true,
      result: {
        totalItems: items.length,
        data: items,
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({success: false, message: error.message });
  }
}


export const getProductById = async (req, res) => {
  const param = req.params.id
  try {
    const response = await fetch(`${BASE_URL}/products/${param}`);
    const result = await response.json();

    const item = new itemModel(
      result.id,
      result.name,
      result.price,
      result.imageUrl,
      result.description,
      result.stock,
      result.category
    );

    res.status(200).json({
      success: true,
      result: item
    });
  } catch (error) {
    console.error('Error fetching item:', error.message);
    res.status(500).json({success: false, message: error.message });
  }
}