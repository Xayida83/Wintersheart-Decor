import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from './routes/productsRoutes.mjs'

// import { listProducts } from './controllers/productsController.mjs';


dotenv.config();

const PORT = process.env.PORT || 5010;

const app = express();

// Middleware...
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Wintersheart Decor API!');
});

// Produkter-route
app.use('/api/products', productsRoutes); 


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
