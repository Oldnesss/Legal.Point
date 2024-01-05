/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerNumber: {
        type: Sequelize.STRING,
      },
      customerName: {
        type: Sequelize.STRING,
      },
      customerEmail: {
        type: Sequelize.STRING,
      },
      firmName: {
        type: Sequelize.STRING,
      },
      innOrOgrn: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      legalAddress: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Offers');
  },
};
