import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Order from './order';
import Product from './product';

@Table
export default class OrderItem extends Model {
  @ForeignKey(() => Product)
  @Column({ allowNull: false })
  productId!: number;

  @ForeignKey(() => Order)
  @Column({ allowNull: false })
  orderId!: number;

  @Column({ allowNull: false })
  count!: number;
}
