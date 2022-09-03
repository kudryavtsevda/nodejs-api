import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Address from './address';

@Table
export default class Account extends Model {
  @Column
  login!: string;

  @Column
  password!: string;

  @Column
  salt!: string;

  @HasMany(() => Address)
  addresses!: Address[];
}
