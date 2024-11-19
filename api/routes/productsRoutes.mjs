import express from 'express';
import { listProducts, getProductById } from '../controllers/productsController.mjs';

const router = express.Router();

router.get('/', listProducts); // Hämta alla produkter
router.get('/:id', getProductById); // Hämta en specifik produkt via ID

export default router;
