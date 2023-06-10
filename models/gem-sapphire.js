'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gemSapphire extends Model {
    static associate(models) {
      gemSapphire.hasMany(models.UserRing);
    }
  }
  gemSapphire.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'gemSapphire',
  });
  return gemSapphire;
};
