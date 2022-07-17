'use strict';

module.exports = {
  async up(queryInterface, Sequelize) { 
    await queryInterface.createTable('Users', { 
      userId: { 
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      displayName: { 
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

