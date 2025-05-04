'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AddressInfo', {
      enrollmentNumber: {
        type: Sequelize.STRING,
        references: {
          model: 'GeneralInfo',
          key: 'enrollmentNumber',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      address: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      pincode: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AddressInfo');
  },
};
