import { Router } from 'express';
import { Order } from './orders.model';
import { createOrder } from './orders.controller';

export const orderRouter = (createOrderDal: (order: Order) => Promise<Order>) => {
  const router = Router();
  router.post('/orders', createOrder(createOrderDal));
  return router;
};
