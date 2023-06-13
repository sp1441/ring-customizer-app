'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gemRuby extends Model {
    static associate(models) {

    }
  }
  gemRuby.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING // URL link to my image of gem here
  }, {
    sequelize,
    modelName: 'gemRuby',
  });
  return gemRuby;
};
