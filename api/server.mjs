import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5010;

const app = express();
// Middleware...
app.use(express.json());

app.use(cors());

app.get('/', async (req, res) => {
  const response = await fetch('http://localhost:3000/products');

  if (response.ok) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  }
});

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}/`));

