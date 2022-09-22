"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Files.init(
    {
      name: DataTypes.STRING,
      extension: DataTypes.STRING,
      userId: DataTypes.NUMBER,
      referenceId: DataTypes.STRING,
      isPublic: DataTypes.BOOLEAN,
      isEncrypted: DataTypes.BOOLEAN,
      size: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Files",
    }
  );
  return Files;
};
