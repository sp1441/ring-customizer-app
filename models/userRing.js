'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRing extends Model {
    static associate(models) {
      UserRing.belongsTo(models.user);
      UserRing.belongsTo(models.Ring);
      UserRing.belongsTo(models.Gem);
      UserRing.belongsTo(models.Band);
    }
  }
  UserRing.init({
    userId: DataTypes.INTEGER,
    ringId: DataTypes.INTEGER,
    gemId: DataTypes.INTEGER,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRing',
  });
  return UserRing;
};
