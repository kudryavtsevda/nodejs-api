import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';

export default () => {
  const dbName = process.env.DB_NAME as string;
  const dbUser = process.env.DB_USER as string;
  const dbHost = process.env.DB_HOST as string;
  const dbDriver = process.env.DB_DRIVER as Dialect;
  const dbPassword = process.env.DB_PASSWORD as string;
  const dbPort = process.env.DB_PORT as unknown as number;
  return new Sequelize({
    database: dbName,
    username: dbUser,
    password: dbPassword,
    host: dbHost,
    dialect: dbDriver,
    models: [__dirname.concat(`/../models`)],
    port: dbPort,
  });
};
