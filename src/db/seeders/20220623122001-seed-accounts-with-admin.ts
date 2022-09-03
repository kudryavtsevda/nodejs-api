import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert('Accounts', [
        {
          id: 1,
          login: 'admin',
          password:
            'fe0c891b348621251e46dfde05c633a2184db69326a4095ce53455d57d7d98859480670f7a5eb2143065c05664a0ab01cbaf9db8ed3475fd622245bdf817fb2b',
          salt: '7030c42c8c9a35f56393f8e4d13a1181',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }),

  down: (queryInterface: QueryInterface): Promise<void> =>
    queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkDelete('Accounts', { id: 1 }, {});
    }),
};
