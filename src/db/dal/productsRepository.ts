import Extra from '../models/extra';
import Product from '../models/product';

export const getProductById = async (id: number) =>
  (await Product.findOne({ include: [Extra], where: { id } })) || new Product();

export const getAllProducts = () => Product.findAll();
