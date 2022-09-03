import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Product from './product';

@Table
export default class Extra extends Model {
  @Column
  name!: string;

  @ForeignKey(() => Product)
  @Column
  productId!: number;
}
