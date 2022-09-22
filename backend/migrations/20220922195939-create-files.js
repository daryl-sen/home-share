"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Files", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      extension: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.NUMBER,
      },
      referenceId: {
        type: Sequelize.STRING,
      },
      isPublic: {
        type: Sequelize.BOOLEAN,
      },
      isEncrypted: {
        type: Sequelize.BOOLEAN,
      },
      size: {
        type: Sequelize.NUMBER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Files");
  },
};
