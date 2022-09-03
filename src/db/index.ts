import { createAddress, updateAddress, deleteAddress } from './dal/addressRepository';
import openDatabaseConnection from './connection/openDatabaseConnection';
import { getByLogin } from './dal/accountsRepository';
import { getAllProducts, getProductById } from './dal/productsRepository';
import { createOrder, getNotReadyOrders, updateOrders } from './dal/ordersRepository';

export {
  openDatabaseConnection,
  getByLogin,
  getAllProducts,
  getProductById,
  createAddress,
  updateAddress,
  deleteAddress,
  createOrder,
  getNotReadyOrders,
  updateOrders,
};
