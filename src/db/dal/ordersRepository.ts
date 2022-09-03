import { Op } from 'sequelize';
import connection from '../connection/connection';
import Order from '../models/order';
import OrderItem from '../models/orderItem';

export const createOrder = async (order: Partial<Order>): Promise<Order> => {
  return await Order.create(order, { include: [OrderItem] });
};

export const getNotReadyOrders = async () =>
  await Order.findAll({ where: { status: { [Op.notIn]: [3] } }, attributes: ['id', 'status'] });

export const updateOrders = async (orders: Partial<Order>[]) => {
  const transaction = await connection().transaction();
  try {
    const updateTasks = orders.map((o) => Order.update(o, { where: { id: o.id }, transaction }));
    await Promise.all(updateTasks);
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
  }
};
