import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert(
        'Addresses',
        [
          {
            id: 1,
            name: 'Home',
            line1: 'Samara',
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Work',
            line1: 'Georgia',
            userId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        { transaction },
      );
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete('Addresses', { id: [1, 2] }, { transaction });
    }),
};
