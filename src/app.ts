import cors from 'cors';
import express, { Request, Response, Application } from 'express';
import { authRouter, authorize } from './authorization';
import {
  getByLogin,
  getAllProducts,
  getProductById,
  createAddress,
  updateAddress,
  deleteAddress,
  createOrder,
} from './db';
import { productsRouter } from './products';
import { addressRouter } from './addresses';
import { orderRouter } from './orders';
import i18n from 'i18n';
import path from 'path';

const app: Application = express();
app.use(cors());
app.use(express.json());
i18n.configure({
  locales: ['en'],
  directory: path.join(__dirname, '/locales'),
});

app.use('/', authRouter(getByLogin));
app.use('/', productsRouter(getProductById, getAllProducts));
app.use('/', addressRouter(createAddress, updateAddress, deleteAddress));
app.use('/', orderRouter(createOrder));
app.get('/', async (req: Request, res: Response): Promise<void> => {
  res.send('Hello Typescript with Node.js!');
});
app.get('/test', authorize, async (req: Request, res: Response): Promise<void> => {
  res.send('Hello Typescript with Node.js!');
});
export default app;
