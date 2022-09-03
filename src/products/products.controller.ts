import { Request, Response } from 'express';
import { Product } from './products.model';

export const getProductById =
  (getProductById: (id: number) => Promise<Product>) => async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = await getProductById(id);
    return res.status(200).send(product);
  };

export const getAllProducts =
  (getAllProducts: () => Promise<Product[]>) => async (req: Request, res: Response) => {
    const products = await getAllProducts();
    return res.status(200).send(products.map((p) => ({ id: p.id, name: p.name })));
  };
