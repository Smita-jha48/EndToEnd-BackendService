'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      values: {
        type: Sequelize.JSON
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contents',
          key: 'id',
        },
      },
      collection_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Collections',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Entries');
  }
};