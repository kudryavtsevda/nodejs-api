import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import Account from './account';

@Table
export default class Address extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.NUMBER, allowNull: false })
  id!: number;

  @Column({ allowNull: false, type: DataType.STRING(1000) })
  name!: string;

  @Column({ type: DataType.STRING(2000), allowNull: true })
  line1!: string | null;

  @ForeignKey(() => Account)
  @Column({ type: DataType.NUMBER, allowNull: false })
  userId!: number;
}
