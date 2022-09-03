import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'Orders',
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
          addressId: {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Addresses',
              },
              key: 'id',
            },
            allowNull: false,
          },
          status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
        },
        { transaction },
      );
      await queryInterface.createTable(
        'OrderItems',
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          count: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          productId: {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Products',
              },
              key: 'id',
            },
            allowNull: false,
          },
          orderId: {
            type: DataTypes.INTEGER,
            references: {
              model: {
                tableName: 'Orders',
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
        },
        { transaction },
      );
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('OrderItems', { transaction });
      await queryInterface.dropTable('Orders', { transaction });
    }),
};
