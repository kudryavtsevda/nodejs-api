import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      return queryInterface.createTable('Accounts', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        login: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        salt: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('Accounts');
    }),
};
