import { Request, Response } from 'express';
import { Order } from './orders.model';

export const createOrder =
  (createOrderDal: (order: Order) => Promise<Order>) => async (req: Request, res: Response) => {
    const order = req.body as Order;
    const result = await createOrderDal(order);
    return res.status(200).send(result);
  };
