const { hashSync } = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          email: '1@1',
          name: '1',
          hashpass: hashSync('1', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: '2@2',
          name: '2',
          hashpass: hashSync('2', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
