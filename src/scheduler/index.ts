import { getNotReadyOrders, updateOrders } from '../db';
import cron from 'node-cron';
import { OrderStatus } from '../orders/orders.model';
import { openDatabaseConnection } from '../db';
import * as dotenv from 'dotenv';
import { debug } from 'debug';

dotenv.config();
openDatabaseConnection();

cron.schedule('*/1 * * * * *', async () => {
  const ordersToUpdate = (await getNotReadyOrders()).map((o) => ({
    id: o.id,
    status: (o.status + 1) as OrderStatus,
  }));
  await updateOrders(ordersToUpdate);
});

debug('scheduler')('job started');
