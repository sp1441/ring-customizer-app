'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate(models) {
      Band.hasMany(models.UserRing);
    }
  }
  Band.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of band here
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};
