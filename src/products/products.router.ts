import { Router } from 'express';
import { getAllProducts, getProductById } from './products.controller';
import { Product } from './products.model';

export const productsRouter = (
  getProductByIdDal: (id: number) => Promise<Product>,
  getAllProductsDal: () => Promise<Product[]>,
) => {
  const router = Router();
  router.get('/products/:id', getProductById(getProductByIdDal));
  router.get('/products', getAllProducts(getAllProductsDal));
  return router;
};
