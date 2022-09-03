import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'Products',
        {
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
          composition: {
            type: DataTypes.STRING(2000),
            allowNull: true,
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
        'Extras',
        {
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
      await queryInterface.dropTable('Extras', { transaction });
      await queryInterface.dropTable('Products', { transaction });
    }),
};
