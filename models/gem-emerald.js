'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gemEmerald extends Model {
    static associate(models) {
      gemEmerald.hasMany(models.UserRing);
    }
  }
  gemEmerald.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'gemEmerald',
  });
  return gemEmerald;
};
