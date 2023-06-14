'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      Comment.belongsTo(models.Favorites, { foreignKey: 'favoriteId' });
    }
  }

  Comment.init(
    {
      userId: DataTypes.INTEGER,
      favoriteId: DataTypes.INTEGER,
      text: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );

  return Comment;
};
