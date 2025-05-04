'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ParentInfo', {
      enrollmentNumber: {
        type: Sequelize.STRING,
        references: {
          model: 'GeneralInfo',
          key: 'enrollmentNumber',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      fatherName: { type: Sequelize.STRING },
      f_occupation: { type: Sequelize.STRING },
      mothersName: { type: Sequelize.STRING },
      m_occupation: { type: Sequelize.STRING },
      f_mobileNumber: { type: Sequelize.BIGINT },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ParentInfo');
  },
};
