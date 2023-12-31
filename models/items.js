"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      category: DataTypes.STRING,
      description: DataTypes.STRING,
      colors: DataTypes.STRING,
      variant: DataTypes.STRING,
      serialNumber: DataTypes.STRING,
      productCode: DataTypes.STRING,
      imageURL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "items",
    }
  );
  return items;
};
