
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // генерация фейковых данных
    const firmData = [];
    for (let i = 1; i <= 20; i++) {
      firmData.push({
        name: faker.company.name(),
        image: faker.image.avatar(),
        title: faker.company.name(),
        description: faker.company.catchPhrase(),
        body: faker.company.catchPhraseDescriptor(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert(
      'Firms',
      firmData,

      // [
      //   {
      //     title: 'ABC Corporation',
      //     description: '555-1234',
      //     userId: '1',
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      //   {
      //     title: 'XYZ Inc.',
      //     description: '555-5678',
      //     userId: '1',
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },

      //   {
      //     title: '2Sample 2Company2',
      //     description: '2555-9012',
      //     userId: '2',
      //     createdAt: new Date(),
      //     updatedAt: new Date(),
      //   },
      // ],

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
