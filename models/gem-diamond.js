'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gemDiamond extends Model {
    static associate(models) {

    }
  }
  gemDiamond.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'gemDiamond',
  });
  return gemDiamond;
};
