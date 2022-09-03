import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      return await queryInterface.createTable('Addresses', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        line1: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Accounts',
            },
            key: 'id',
          },
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
      await queryInterface.dropTable('Addresses');
    }),
};
