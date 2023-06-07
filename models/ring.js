'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ring extends Model {
    static associate(models) {
      Ring.hasMany(models.Gem);
      Ring.hasMany(models.Band);
      Ring.hasMany(models.UserRing);
    }
  }
  Ring.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    setting: DataTypes.STRING, // New setting field
  }, {
    sequelize,
    modelName: 'Ring',
  });
  return Ring;
};
