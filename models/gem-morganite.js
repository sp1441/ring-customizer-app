'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gemMorganite extends Model {
    static associate(models) {
      gemMorganite.hasMany(models.UserRing);
    }
  }
  gemMorganite.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'gemMorganite',
  });
  return gemMorganite;
};
