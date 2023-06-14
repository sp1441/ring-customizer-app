'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      Favorites.belongsTo(models.user, { foreignKey: 'userId' });
      Favorites.belongsTo(models.gemDiamond, { foreignKey: 'diamondId', as: 'diamond' });
      Favorites.belongsTo(models.gemEmerald, { foreignKey: 'emeraldId', as: 'emerald' });
      Favorites.belongsTo(models.gemMorganite, { foreignKey: 'morganiteId', as: 'morganite' });
      Favorites.belongsTo(models.gemRuby, { foreignKey: 'rubyId', as: 'ruby' });
      Favorites.belongsTo(models.gemSapphire, { foreignKey: 'sapphireId', as: 'sapphire' });
      Favorites.hasMany(models.Comment, { foreignKey: 'favoriteId' });

    }
  }

  Favorites.init(
    {
      userId: DataTypes.INTEGER,
      diamondId: DataTypes.INTEGER,
      emeraldId: DataTypes.INTEGER,
      morganiteId: DataTypes.INTEGER,
      rubyId: DataTypes.INTEGER,
      sapphireId: DataTypes.INTEGER,
      gemType: DataTypes.STRING // new field
    },
    {
      sequelize,
      modelName: 'Favorites',
    }
  );

  return Favorites;
};
