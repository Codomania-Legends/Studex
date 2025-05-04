'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BusInfo', {
      enrollmentNumber: {
        type: Sequelize.STRING,
        references: {
          model: 'GeneralInfo',
          key: 'enrollmentNumber',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      busFacility: { type: Sequelize.BOOLEAN },
      busStop: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BusInfo');
  },
};
