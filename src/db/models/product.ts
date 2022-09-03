import { Table, Column, Model, HasMany, DataType, PrimaryKey } from 'sequelize-typescript';
import Extra from './extra';

@Table
export default class Product extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @HasMany(() => Extra)
  extras!: Extra[];

  @Column({ allowNull: true, type: DataType.STRING(2000) })
  composition!: string | null;

  @Column
  name!: string;
}
