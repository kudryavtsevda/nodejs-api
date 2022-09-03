import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  Default,
} from 'sequelize-typescript';
import Address from './address';
import Account from './account';
import OrderItem from './orderItem';
import { OrderStatus } from '../../orders/orders.model';

@Table
export default class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Account)
  @Column({ allowNull: false })
  userId!: number;

  @ForeignKey(() => Address)
  @Column({ allowNull: false })
  addressId!: number;

  @Default(0)
  @Column({ allowNull: false, defaultValue: 0 })
  status!: OrderStatus;

  @HasMany(() => OrderItem)
  orderItems!: Partial<OrderItem>[];
}
