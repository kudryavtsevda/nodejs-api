import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert('Products', [
        {
          id: 1,
          name: 'Product 1',
          composition: 'Some description 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Product 2',
          composition: 'Some description 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      await queryInterface.bulkInsert('Extras', [
        {
          id: 1,
          name: 'Extra 1',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Extra 2',
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 3,
          name: 'Extra 3',
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 4,
          name: 'Extra 4',
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete('Extras', { id: [1, 2, 3, 4] }, { transaction });
      await queryInterface.bulkDelete('Products', { id: [1, 2] }, { transaction });
    }),
};
