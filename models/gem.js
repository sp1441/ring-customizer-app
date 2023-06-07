'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gem extends Model {
    static associate(models) {
      Gem.belongsTo(models.Ring);
      Gem.hasMany(models.UserRing);
    }
  }
  Gem.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'Gem',
  });
  return Gem;
};
