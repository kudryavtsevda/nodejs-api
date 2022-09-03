import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config();

export const development = {
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER as Dialect,
  logging: true,
};
